import Nav from './Nav';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
  min-height: 100vh;
  display:flex;
  flex-direction: column;
`;

const Main = styled.div` 
  flex-grow: 1;
  overflow: auto;
`;

type Props ={
  className?:string,
  scrollTop?:number,
}

const Layout:React.FC<Props> = (props:any)=> {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    setTimeout(()=>{
      if(!mainRef.current)
      {
        return;
      }
      mainRef.current.scrollTop = props.scrollTop!;//! 表示这个值不可能为空
    },0)
  },[props.scrollTop]) //0表示初始化的过程，尽快
  return (
    <Wrapper>
      <Main className={props.className} data-x={'ebony'}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};

Layout.defaultProps = {
  scrollTop: 0
}

export default Layout;