import React from 'react';
import cs from 'classnames';
//require('icons/tag.svg');
//require('icons/money.svg');
//require('icons/chart.svg');

//如何require一个文件夹


let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);

try{importAll(require.context("icons",true,/\.svg$/));} catch(error){console.log(error);}

type Props =
  {
    name?: string,
  } & React.SVGAttributes<HTMLOrSVGElement>

const Icon = (props: Props) =>
{
  const {name,children,className,...rest} = props;
  return(
    <svg className={cs('icon', className)} {...rest}>
      {props.name && <use xlinkHref={ '#' + props.name}/>}
    </svg>
  );
};

//如果左边存在 执行右边 不存在则不执行。

export default Icon;