import {useEffect, useRef} from 'react';


const useUpadate = (fn:()=>void,deps:any[])=>{
  const count = useRef(0);
  useEffect(()=>{
    count.current += 1;
    //useRef必须要搭配使用count.current
  });
  useEffect(()=>{
    if(count.current > 1)
    {
      fn();
      //window.localStorage.setItem('tags',JSON.stringify(tags));
    }
  },deps);
//undefined => 空数组 => 新tag 第一次变化是有问题 我们需要将第一次变化不执行
//只要tags里面的内容变化了，就会把tags里面的东西存到localstorage中去
//不可变数据  每次修改都是一个新的对象
};

export {useUpadate};