import React from 'react'

type ChildType = {
  name: string
}

function ChildComponent(props: {name: string}) {
  // props.name = '이도경'; 에러남
  return (
    <div>안녕하시오.{props.name}</div>
  )
}

type MultiPropsType = {
  name: string;
  colorProps: string;
}

function MultiProps({name, colorProps}: MultiPropsType){
  return (
    <div style={{color: colorProps}}>반갑습니다.{name}님</div>
  )
}

MultiProps.defaultProps = {
  name: '황상기'
}

export default function Props01() {

  const props = {
    name: '박영준',
    colorProps: 'orange'
  }
  return (
    <div>
      <ChildComponent name='이승아'/>
      <ChildComponent name='이도아'/>
      <MultiProps name = '이기싁' colorProps= 'pink' />
      <MultiProps {...props}/>
      <MultiProps colorProps='purple' />
    </div>
  )
}
