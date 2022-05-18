import React, { useState } from 'react'
import styles from './AuthorForm.module.css'
import {useNavigate} from 'react-router-dom';
export default (props) => {
    const navigate = useNavigate();
    const {initialName,initialQuote,onSubmitProp,errors} = props;
    const [name, setName] = useState(initialName); 
    const [quote, setQuote] = useState(initialQuote);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name,quote});
    }
    return (
        <form id="form1" className={styles.form} onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <div className={styles.formelt}>
                <label>Name:</label><br/>
                <input type="text" onChange = {(e)=>setName(e.target.value)} value={name}/>
            </div>
            <div className={styles.formelt}>
                <label>Quote:</label><br/>
                <input type="text" onChange = {(e)=>setQuote(e.target.value)} value={quote}/>
            </div>
            <button onClick={()=>navigate("/")}>Cancel</button>
            <button type="submit" form="form1" value="Submit">Submit</button>
        </form>
    )
}
