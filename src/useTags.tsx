import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags= [
  {id:createId(),name:'衣'},
  {id:createId(),name:'食'},
  {id:createId(),name:'住'},
  {id:createId(),name:'行'}];


const useTags = () =>
{
  const [tags,setTags] = useState<{id:number; name:string}[]>(defaultTags);
  const findTag = (id:number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id:number) => {
    let result = -1;
    for (let i = 0; i<tags.length;i++)
    {
      if (tags[i].id === id)
      {
        result = i;
        break;
      }
    }
  };
  const updateTag = (id:number, obj:{name:string}) => {
    //获取你要改的tag的下标
    const index = findTagIndex(id);
    //深拷贝 tags 得到 tagsClone
    // vue: tags.splice(index,1,{id:id,name:obj.name})
    // react中不推荐直接修改原数组
    //react中使用 tags.splice(index,1,{id:id,name:obj.name}) 这个的话，会认为两者是一样的，不会发生改变。
    const tagsClone = JSON.parse(JSON.stringify(tags));
    //把 tagsClone 的第 index 删掉， 换成{id:id,name:obj.name}
    tagsClone.splice(index,1,{id:id,name:obj.name});
    //react强调不可变数据 tags tagsClone
    setTags(tagsClone);
  };
  return{tags, setTags,findTag,updateTag,findTagIndex}; //返回数组会出问题
};

//封装一个hook
//1、用useXXX 定义一个函数
//2、这个函数返回一个对象 包含了读写接口


//改tag
//1:衣 => 1：衣服
//{amount: 100, tags:[1]}

//tag: string => tag: {id: number; name:string}

export {useTags};
