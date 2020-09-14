import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section` 
   font-size: 24px;
   >ul{
      display: flex;
      >li{
         width: 50%;
         text-align: center;
         padding: 16px 0;
         position: relative;
         &.selected::after{
            //为什么不直接使用border-bottom： 3px solid grey呢？
            //因为会导致点击元素的高度变化 不推荐使用
            content: ''; //使用伪元素
            display: block;
            height: 4px;
            background: #333;
            position: absolute;
            bottom:0;
            width: 100%;
            left: 0;   //保险起见 防止在其他浏览器出问题
         }
      }  
   }
`;

type Props={
  value: '-' | '+',
  onChange:(value:'-' | '+')=>void;
};

const CategorySection: React.FC<Props> = (props)=>{
  const categoryMap = {'-':'支出','+':'收入'};
  type Y = keyof typeof categoryMap;
  const [categoryList] = useState<Y[]>(['-','+']); //这个值只可能是加或者减 收缩范围
  const category = props.value
  return (
    <Wrapper>
      <ul>
        {categoryList.map( c=>
          <li
            key={c}
            className={
              category === c ? 'selected' : ''}
            onClick={
              () => { props.onChange(c)}
            }>{categoryMap[c]}</li>
        )}
      </ul>
    </Wrapper>
    )
};

export {CategorySection};