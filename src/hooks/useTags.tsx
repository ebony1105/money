import {useEffect, useRef, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpadate} from './useUpate';


const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  useEffect(()=>{
    //从localstorage中取数据
    console.log('after mount');
    let localTags = JSON.parse(window.localStorage.getItem('tags')||'[]');
    if (localTags.length === 0)
    {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'}
      ]
    }
    setTags(localTags);
  },[]);

  useUpadate(()=>{
    window.localStorage.setItem('tags',JSON.stringify(tags));
  },[tags]);

  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
  };

  const updateTag = (id: number, {name}: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name:name} : tag))
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  const addTag = ()=>{
    const tagName = window.prompt('新的标签名称为：');
    if (tagName !== null)
    {
      setTags([...tags,{id:createId(),name:tagName}]);
    }
  };

  return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag,addTag}; //返回数组会出问题
};

//封装一个hook
//1、用useXXX 定义一个函数
//2、这个函数返回一个对象 包含了读写接口


//改tag
//1:衣 => 1：衣服
//{amount: 100, tags:[1]}

//tag: string => tag: {id: number; name:string}

export {useTags};
