import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

export default props => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author/new', author)
            .then(res=>navigate("/"))
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <Link style={{color:'blue'}} to={"/"}>Home</Link>
            <p style={{color:'blueviolet'}}>Add a new author:</p>
            <AuthorForm
                initialName=""
                initialQuote=""
                onSubmitProp={createAuthor}
                errors={errors}
            />
        </div>
    )
}
