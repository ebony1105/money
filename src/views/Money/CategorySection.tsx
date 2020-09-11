import styled from 'styled-components';

const CategorySection = styled.section` 
   font-size: 24px;
   >ul{
      display: flex;
      background: #c4c4c4;
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

export {CategorySection};