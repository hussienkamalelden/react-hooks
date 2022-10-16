import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./style.css";

const Posts = (props) => {

    //States
    const [mainData, setmainData] = useState([]);
    const [data, setData] = useState([]);
    const [id, setID] = useState(null);
    const [word, setWord] = useState('');

    //Functions
    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=100').then((res) => {
            setData(res?.data?.products);
            setmainData(res?.data?.products);
        }).catch(err => console.log(err))
    }, []);

    const searchByWord = () => {
        setData(data.filter(ele => ele.description.toLowerCase().includes(word.toLowerCase())))
    }

    return (
        <>
            {/* {console.log(data)} */}
            <label htmlFor="">By ID: </label>
            <input type="number" onChange={e => setID(e.target.value)} />
            <button onClick={() => setData(data.filter(ele => ele.id == id))}>Search ID</button>
            <input type="reset" onClick={() => setData(mainData)} />
            <h1> OR </h1>
            <label htmlFor="">By Description: </label>
            <input type="text" onChange={e => setWord(e.target.value)} />
            <button onClick={() => searchByWord()}>Search Description</button>
            <input type="reset" onClick={() => setData(mainData)} />
            <table class="table">
                <thead>
                    <tr>
                        <th className='id' scope="col">ID</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Product Name</th>
                        <th className='desc' scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(ele => {
                            return (
                                <tr key={ele.id}>
                                    <td className='id'>{ele.id}</td>
                                    <td>{ele.brand}</td>
                                    <td>{ele.title}</td>
                                    <td className='desc'>{ele.description}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Posts;