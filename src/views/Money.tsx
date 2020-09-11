import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {Simulate} from 'react-dom/test-utils';
import select = Simulate.select;

const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
    `;

type Category = '-'|'+';


function Money() {
  const [selected,setSelected] = useState({
    tags:[] as string[],
    note:'',
    category:'-' as Category,
    amount: 0,
  });

  type Selected = typeof selected;
  //这里面允许obj只接受部分参数
  const onChange = (obj: Partial<Selected>) =>
  {
    setSelected({
      ...selected,
      ...obj
    })
  }

    //如果这里使用className会影响之前的ts语句
  return (
    <MyLayout>
      <TagsSection value={selected.tags}
                   onChange={ (tags) => onChange({tags})}/>
      <NoteSection value={selected.note}
                   onChange={(note)=>onChange({note})}/>
      <CategorySection value={selected.category}
                       onChange={(category) =>onChange({category})}/>
      <NumberPadSection value={selected.amount}
                        onChange={(amount)=>{onChange({amount})}}
                        onOk={()=>{}}/>
    </MyLayout>
  );
}

export default Money;