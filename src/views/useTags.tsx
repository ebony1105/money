import {useState} from 'react';


const useTags = () =>{
  const [tags,setTags] = useState<string[]>(['衣','食','住','行']);
  return{tags, setTags}; //返回数组会出问题
};

//封装一个hook
//1、用useXXX 定义一个函数
//2、这个函数返回一个对象 包含了读写接口


export {useTags};
