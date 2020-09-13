import React from 'react';
import {useTags} from 'useTags';
import {useParams,useHistory} from 'react-router';
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
  const {findTag,updateTag,deleteTag} = useTags();
  let {id:idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag:{id:number,name:string}) =>
    (
    <div>
      <InputWrapper>
        <Input label="标签名"
               type="text"
               placeholder="标签名"
               value={tag.name}
               onChange={(e) => {
                 updateTag(tag.id, {name: e.target.value});
               }}/>
      </InputWrapper>
      <CenterContent>
        <Space/>
        <Space/>
        <Button onClick={() => {
          deleteTag(tag.id)
        }}>删除标签</Button>
      </CenterContent>
    </div>
    );

  const history = useHistory();

  const onClickBack = ()=>{
    history.goBack();
    // window.history.back();//当我们使用hash的路由来发请求的时候，我们前进或者后退都不会发请求。
    //history.back的bug：如果用户直接输入网址进入页面的话，后退则会进入一开始的页面，而不是自己本身的上一层目录
    //推荐使用react中 React Dom 自定义的一个方法: useHistory
  };

  return (
    <Layout>
      <TopBar>
        <Icon name="left" onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon />
      </TopBar>
      {tag ? tagContent(tag) : <CenterContent>tag不存在</CenterContent>}
    </Layout>
  );
};

export {Tag};