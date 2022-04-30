import React from 'react';
import styles from './components/styles/app.module.css';
import {Task} from './components/Task';
import {Form} from './components/Form';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';




const userName = "Adrián";

function App() {
  return (
    <div className={styles.App}>
      <header className="App-header">
        <div className={styles.userImg}>
          <img src="https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png" width={80} alt="Imagen de usuario" />
        </div>
        <div className={styles.headerOptions}>
          <button className={styles.headerOptionsIcon}><LogoutIcon /></button>
          <button className={styles.headerOptionsIcon}><SettingsIcon /></button>
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
