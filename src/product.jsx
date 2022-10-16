import React, { useEffect, useState } from 'react';

const Product = (props) => {

  //States
  const [device, setDevice] = useState([
    { id: 0, product: 'laptop' },
    { id: 1, product: 'screen' },
  ]);
  const [inputVal, setInputVal] = useState('');

  //Functions
  const add = () => {
    setDevice([...device, { id: device.length, product: inputVal }])
  }
  const deleteBtn = (id) => {
    setDevice(device.filter((ele) => ele.id !== id));
  }

  return (
    <>
      <input type="text" onChange={(e) => setInputVal(e.target.value)} />
      <h3>Your Text: <span style={{ color: "grey" }} >{inputVal}</span></h3>
      <button onClick={add}>ADD</button>
      {device.map(ele => {
        return <h1 key={ele.id}>{ele.product} <span style={{ color: "red", cursor: "pointer" }} onClick={() => deleteBtn(ele.id)}>  X</span></h1>
      })}

    </>
  );
}

export default Product;