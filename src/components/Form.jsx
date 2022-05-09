import React from "react";
import styles from './styles/form.module.css';
import { TextField, Divider, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export const Form = ()=> {
    return (
        <><div className={styles.formContainer}>
            <TextField id="standard-basic" label="Titulo" variant="standard" className={styles.textField} />
        </div>
        <div className={styles.clear} />
        <div className={styles.formContainer}>
            <TextField id="standard-basic" label="¿Que tienes planeado hoy?" variant="standard" className={styles.textFieldContent} />
            
        </div>
        <div className={styles.sendButton}>
        <IconButton>
            <SendIcon />
        </IconButton>
        </div>
        <div className={styles.clear} />

        <Divider className={styles.divider}></Divider>
        </>
        
    );
}

