import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useRecords} from '../hooks/useRecords';

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
    `;

type Category = '-' | '+';

const defaultFormData =
  {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0,
  };

const CategoryWrapper = styled.div`
   background: #c4c4c4;
`;


function Money() {
  const [selected, setSelected] = useState(defaultFormData);

  type Selected = typeof selected;
  //这里面允许obj只接受部分参数
  const onChange = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };

  const {addRecord} = useRecords();

  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功');
      setSelected(defaultFormData);
    }
  };


  //如果这里使用className会影响之前的ts语句
  return (
    <MyLayout scrollTop={9999}>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={(note) => onChange({note})}/>
      <CategoryWrapper>
        <CategorySection value={selected.category}
                         onChange={(category) => onChange({category})}/>
      </CategoryWrapper>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => {onChange({amount});}}
                        onOk={submit}/>
    </MyLayout>
  );
}

export default Money;