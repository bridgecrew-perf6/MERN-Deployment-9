import React from 'react'
import styles from './EditButton.module.css';

export default props => {
    return (
        <button className={styles.edtbtn} onClick={props.oc}>Edit</button>
    )
}

