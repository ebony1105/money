import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  display: flex; 
  //这里给的属性会影响后面的float：left； 
  // 那样我们就不用给float：left 清除浮动了
  flex-direction: column;
  >.output{
     background: white;
     font-size: 36px;
     line-height: 72px;
     text-align:right;
     padding: 0 16px;
     box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                 inset 0 5px 5px -5px rgba(0,0,0,0.25); 
       //上下都有阴影的实现 其中第一个是下阴影 先往上提5像素的阴影，再往下拉
  }
  >.pad{
    //按钮一字排开 用flex会导致ok那一行和下一行出现空隙
    // display:flex;
    // flex-wrap: wrap;
    >button{
       font-size: 18px;
       float: left;
       width: 25%;
       height: 64px;
       border: none;
       &.ok{
          float: right;
          height: 128px;      
       }
       &.zero{
          width: 50%;
       }
       &:nth-child(1){
          background: #f2f2f2;
       }
       &:nth-child(2),
       &:nth-child(5){
          background: #e0e0e0;
       }
       &:nth-child(3),
       &:nth-child(6),
       &:nth-child(9){
          background: #d3d3d3;
       }
       &:nth-child(4),
       &:nth-child(7),
       &:nth-child(10){
          background: #c1c1c1;
       }
       &:nth-child(8),
       &:nth-child(11),
       &:nth-child(13){
          background: #b8b8b8;
       }
       &:nth-child(14)
       {
          background: #a9a9a9;
       }
       &:nth-child(12){
          background: #9a9a9a;
       }
    }
  }
`;

const NumberPadSection = ()=>{
  const [output,setOutput] = useState('0');
  const onClickButtonWrapper = (e:React.MouseEvent)=>
  {
    const text = (e.target as HTMLButtonElement).textContent;
    //这里面可能编译的时候会认为e.target不一定是一个button。
    //用as可以强制转换
    if (text === null)
    {
      return;
    }
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0')
        {
          setOutput(text);
        }
        else
        {
          setOutput(output+text)
        }
        break;
      case '删除':
        console.log('删除');
        break;
      case '清空':
        console.log('清空');
        break;
      case '.':
        console.log('.');
        break;
      case 'OK':
        console.log('OK');
        break;
    }
  };
  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  );
};

export {NumberPadSection};    //或者使用 export {NumberPadSection};