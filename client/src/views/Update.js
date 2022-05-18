import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams,Link,useNavigate} from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

export default props => {
    const {id}=useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [author, setAuthor] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])

    const updateAuthor = updatedAuthor => {
        axios.put('http://localhost:8000/api/author/' + id, updatedAuthor)
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
            <p style={{color:'blueviolet'}}>Edit this author:</p>
            {loaded && (
                <AuthorForm
                    onSubmitProp={updateAuthor}
                    initialName={author.name}
                    initialQuote={author.quote}
                    errors={errors}
                />
            )}
        </div>
    )
}