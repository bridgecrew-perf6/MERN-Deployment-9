import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthorList from '../components/AuthorList';
import axios from 'axios';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            });
    },[]);

    const removeFromDom = productId => {
        setAuthors(authors.filter(product => product._id !== productId));
    }

    return (
        <div>
            <Link style={{color:'blue'}} to={"/new"}>Add an author</Link>
            <p style={{color:'blueviolet'}}>We have quotes by:</p>
            {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    )
}