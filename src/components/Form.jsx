import React from "react";
import styles from './styles/form.module.css';
import { TextField } from "@mui/material";

export const Form = ()=> {
    return (
        <div className={styles.formContainer}>
            <TextField id="standard-basic" label="¿Que tienes planeado hoy?" variant="standard" className={styles.textField} />
        </div>
    );
}

