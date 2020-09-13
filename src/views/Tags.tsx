import Layout from 'components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';
import {Button} from 'components/Button';
import {CenterContent} from 'components/Center';
import {Space} from '../components/Space';


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



function Tags() {
  const {tags, addTag} = useTags(); //相当于
  return (
    <Layout>
      <TagList>
        {tags.map(tag => <li key={tag.id}>
          <Link to={'/tags/' + tag.id}>
            <span className="oneLine">{tag.name}</span>
            <Icon name="right2"/>
          </Link>
        </li>)}
      </TagList>
      <CenterContent>
        <Space/>
        <Button onClick={addTag}>新增标签</Button>
        <Space/>
      </CenterContent>

    </Layout>
  );
}

export default Tags;