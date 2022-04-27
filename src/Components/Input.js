import React, {useState, useEffect} from 'react';
import axios from 'axios';

import GifList from './GifList';

function Input() {

    const [gifname, setgifname] = useState('');
    const [gif, setgif] = useState([]);
    
        async function handleSubmit(event) {
        event.preventDefault();
        await axios.get(`https://api.giphy.com/v1/gifs/search?q=${gifname.replace(/\s/g, '+')}&api_key=3ZT8IGYuq0IQP1v19SAGm1RNkL5L5FUI`)
        .then((response) => {
            let resp = response.data.data
            setgif(resp)
            console.log(resp)

        })
    };
    useEffect (() => {
        handleSubmit()}
    )

    return (
        <>
            <div className="input-group">
                <form className="form-group has-search" onSubmit={handleSubmit} >
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" placeholder="Search" 
                    value={ gifname } 
                    onChange={ (event) => setgifname(event.target.value ) }
                    required
                    />
                </form>
            </div>
            
            <GifList gif={gif}/> 
            
        </>
    );
  }
  
  export default Input;