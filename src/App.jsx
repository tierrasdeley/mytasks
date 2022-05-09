import React from 'react';
import styles from './components/styles/app.module.css';
import {Task} from './components/Task';
import {Form} from './components/Form';
import LogoutIcon from '@mui/icons-material/Logout';
import {IconButton} from '@mui/material';



const userName = "Adrián";

function App() {
  return (
    <div className={styles.App}>
      <header className="App-header">
        <div className={styles.userImg}>
          <img src="https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png" width={80} alt="Imagen de usuario" />
        </div>
        <div className={styles.headerOptions}>
          <IconButton className={styles.headerOptionsIcon}><LogoutIcon /></IconButton>
        </div>
        <div className={styles.clear}></div>
        <div className={styles.titleHeader}>Welcome back, {userName}</div>
      </header>
      <div className={styles.taskContainer}>
        <Form/>
        <Task/>
      </div>
    </div>
  );
}

export default App;
