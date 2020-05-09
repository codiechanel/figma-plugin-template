import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './ui.css'
import styled from 'styled-components';
import {useRef, useState} from "react";
import * as chroma from 'chroma-js'
import * as polished from 'polished'
import * as Color from 'color'

const Rectangle  = styled.div`
height: 200px;
`

const Box  = styled.div`
display: flex;
//height: 100%;
flex: 1;
flex-direction: column;
`


const Container  = styled.div`
display: flex;
height: 100%;
flex: 1;
flex-direction: column;

`
const MyInput  = styled.input`


&&::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}

`

declare function require(path: string): any

function App(props) {
  // textbox: HTMLInputElement

  /*countRef = (element: HTMLInputElement) => {
    if (element) element.value = '5'
    this.textbox = element
  }

  onCreate = () => {
    const count = parseInt(this.textbox.value, 10)
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
  }

  onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }*/



    const inputRef = useRef(null)
  const handleOnChange = (value) => {
      let f = chroma.scale(['yellow', '008ae5'])
    let color = f(value/100).hex()
    inputRef.current.style.backgroundColor = color;

  }
    return <Container>

  {/*    <p>Count: <input ref={this.countRef} /></p>
      <button id="create" onClick={this.onCreate}>Create</button>
      <button onClick={this.onCancel}>Cancel</button>*/}
      <Box>
        <Rectangle ref={inputRef}>cool</Rectangle>
      </Box>
      <MySlider handleOnChange={handleOnChange}/>


    </Container>



}

function MySlider(props) {
  let [val, setValue] = useState(10)
  const handleOnChange = (e) => {
    const { value } = e.target;
    setValue(value)
    props.handleOnChange(value)
   /* this.props.handleUpdateColor(this.props.hexColor, value);
    this.setState({ value });*/
  }

  return  <MyInput type="range" min={0} max={100} value={val}  onChange={handleOnChange} />
}

ReactDOM.render(<App />, document.getElementById('react-page'))
