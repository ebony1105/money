import {useState} from 'react';
import {createId} from './lib/createId';


const useTags = () =>{
  const [tags,setTags] = useState<{id:number; name:string}[]>([
    {id:createId(),name:'衣'},
    {id:createId(),name:'食'},
    {id:createId(),name:'住'},
    {id:createId(),name:'行'}]);
  return{tags, setTags}; //返回数组会出问题
};

//封装一个hook
//1、用useXXX 定义一个函数
//2、这个函数返回一个对象 包含了读写接口


//改tag
//1:衣 => 1：衣服
//{amount: 100, tags:[1]}

//tag: string => tag: {id: number; name:string}

export {useTags};
