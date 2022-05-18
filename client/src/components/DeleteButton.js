import React from 'react'
import axios from 'axios';
import styles from './DeleteButton.module.css';

export default props => {
    const {authorId,successCallback} = props;
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button className={styles.delbtn} onClick={deleteAuthor}>
            Delete
        </button>
    )
}

