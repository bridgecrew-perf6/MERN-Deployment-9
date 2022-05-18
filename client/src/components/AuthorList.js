import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './AuthorList.module.css';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

export default props => {
    const navigate = useNavigate();

    return (
        <table className={styles.authtable}>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
            </thead>
            <tbody>
            {props.authors.sort((a, b) => a.name.localeCompare(b.name)).map((author, idx)=>{
                return <tr key={idx}>
                    <td>{author.name}</td>
                    <td>
                        <EditButton oc={()=>navigate("/edit/"+author._id)}/>
                        <DeleteButton
                            authorId={author._id}
                            successCallback={()=>props.removeFromDom(author._id)}
                        />
                    </td>
                </tr>
            })}
            </tbody>
        </table>
    )
}

