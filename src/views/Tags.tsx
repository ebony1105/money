import Layout from '../components/Layout';
import React from 'react';
import {useTags} from './useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';


const TagList = styled.ol`
   font-size:16px;
   background: white;
   >li{
   //#e5e5e7
    border-bottom: 1px solid #d5d5d5;
    line-height: 20px;
    margin-left: 16px;
    >a{
       display: flex;
       justify-content:space-between;
       align-items: center;
       padding: 12px 16px 12px 0;
    }
   }
`;

const CenterContent = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

const Space = styled.div`
    height: 20px;
`;


const Button = styled.button`
   font-size: 18px;
   border: none;
   padding: 8px 12px;
   background: #767676;
   border-radius: 4px;
   color: white;
   
`;

function Tags() {
  const {tags, setTags} = useTags(); //相当于
  return (
    <Layout>
      <TagList>
        {tags.map(tag => <li key={tag.id}>
          <Link to={'/tags/' + tag}>
            <span className="oneLine">{tag.name}</span>
            <Icon name="right2"/>
          </Link>
        </li>)}
      </TagList>
      <CenterContent>
        <Space/>
        <Button>新增标签</Button>
        <Space/>
      </CenterContent>

    </Layout>
  );
}

export default Tags;