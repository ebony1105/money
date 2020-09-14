import {useEffect, useState} from 'react';
import {useUpadate} from './useUpate';



type RecordItem = {
  tagIds: number[],
  note: string,
  category: '+'|'-',
  amount: number,
  createdAt:string
}

type newRecordItem = Omit<RecordItem,'createdAt'>;

//type newRecordItem = Omit<RecordItem,'createdAt'>
// 就是把忽略了createdAt的RecordItem赋值给newRecordItem

//type RecordItem = newRecordItem & {
//  createdAt:string
//}

const useRecords = () => {
  const [records,setRecords] = useState<RecordItem[]>([]);
  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records')||'[]'));
  },[]);
  useUpadate(()=>{
    window.localStorage.setItem('records',JSON.stringify(records))
  },[records]);
  const addRecord = (newRecord:newRecordItem) =>
  {
    const record = {...newRecord, createdAt:(new Date()).toISOString()};
    setRecords([...records,record])
  };
  return {records,addRecord};
};

export {useRecords};