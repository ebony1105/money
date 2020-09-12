import React from 'react';
//require('icons/tag.svg');
//require('icons/money.svg');
//require('icons/chart.svg');

//如何require一个文件夹



type Props ={
  name?: string;
};


let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);

try{
  importAll(require.context("icons",true,/\.svg$/));
}
catch(error){
  console.log(error);
}

const Icon =(props:Props) =>{
  return(
    <svg className="icon">
      {props.name && <use xlinkHref={'#'+props.name}/>}
    </svg>
  );
};

//如果左边存在 执行右边 不存在则不执行。

export default Icon;