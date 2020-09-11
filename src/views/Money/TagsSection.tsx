import styled from 'styled-components';
import * as React from 'react';
import {useState} from 'react';
import {useTags} from '../../useTags';
import {createId} from '../../lib/createId';

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  >ol{
     margin: 0 -12px;
   >li{
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 4px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
         background: greenyellow;
      }
      }
  }
  >button{
     background: none;
     border: none;
     padding: 2px 4px;
     border-bottom: 1px solid #333;
     color: #666;
     margin-top: 8px;
  }
`;

type Props = {
  value: number[],
  onChange: (selected:number[]) => void,
};

const TagsSection:React.FC<Props> = (props)=>
{ //FunctionComponent 可以简写成 FC
  //初始化的时候告诉它是个字符串 tags是个字符串数组 那么tag必然为字符串
  const {tags,setTags} = useTags();
  const selectedTagIds = props.value;
  const onAddTag = ()=>{
    const tagName = window.prompt('新的标签名称为：');
    if (tagName !== null)
    {
      setTags([...tags,{id:createId(),name:tagName}]);
    }
  };


  const onToggleTag = (tagId: number)=>{
    const index = selectedTagIds.indexOf(tagId);
    if(index >= 0)
    {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
      //如果tag被选中的话，就复制所有没有被选中的tag，作为新的selectedTag。
    }
    else{
      props.onChange([...selectedTagIds,tagId])
    }
  };
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id}
              onClick={
            ()=>{onToggleTag(tag.id)}}
              className={selectedTagIds.indexOf(tag.id) >=0 ? 'selected' : ''}
          >{tag.name}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};