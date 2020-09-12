import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router';
import Layout from 'components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';


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

const Tag: React.FC = (props) => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <header>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon name="right"/>
      </header>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="在这里添加备注"/>
        </label>
      </div>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  );
};

export {Tag};