import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {CenterContent} from 'components/Center';
import {Space} from 'components/Space';


type Params = {
  id: string
};


const TopBar = styled.header`
   display: flex;
   justify-content: space-between;
   line-height: 20px;
   padding: 14px;
   background: white;
   align-items: center;
`;

const InputWrapper = styled.section`
  background: white;
  margin: 0px 16px;
  margin-top: 8px;
`;

const Tag: React.FC = (props) => {
  const {findTag,updateTag} = useTags();
  let {id:idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  return (
    <Layout>
      <TopBar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      <InputWrapper>
        <Input label="标签名"
               type="text"
               placeholder="标签名"
               value={tag.name}
               onChange={ (e)=>
               {
                 updateTag(tag.id,{name:e.target.value});
               }}/>
      </InputWrapper>
      <CenterContent>
        <Space/>
        <Space/>
        <Button>删除标签</Button>
      </CenterContent>
    </Layout>
  );
};

export {Tag};