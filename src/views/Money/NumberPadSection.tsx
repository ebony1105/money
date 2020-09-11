import styled from 'styled-components';
import React, {useState} from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import generate from '@babel/generator';
import {generateOutput} from './NumberPadSection/generateOutput';



const NumberPadSection = ()=>{
  const [output, _setOutput] = useState('0');

  const setOutput = (output:string) => {
    if (output.length > 16)
    {
      output = output.slice(0,16);
    }
    else if (output.length === 0)
    {
      output = '0';
    }
    _setOutput(output);
  };

  const onClickButtonWrapper = (e:React.MouseEvent)=>
  {
    const text = (e.target as HTMLButtonElement).textContent;
    //这里面可能编译的时候会认为e.target不一定是一个button。
    //用as可以强制转换
    if (text === null)
    {
      return;
    }
    if (text === 'OK') {
      return;
    }
    if ('0123456789.'.split('').concat(['删除','清空']).indexOf(text) >= 0)
    {
      setOutput(generateOutput(text,output));
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