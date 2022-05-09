import React from "react";
import styles from "./styles/task.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Typography, IconButton, } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export function Task () {
  return (  
    <div className={styles.task}>
              <div>
                      <Card elevation={6} sx={{ minWidth: 275 }} className={styles.singleTask}>
                        <CardContent>
                          <Typography className={styles.taskDate} component="div">23.1.2020</Typography>
                          <Typography variant="h5" component="div">
                            Titulo
                          </Typography>
                          <Typography variant="h7" component="div">
                            Aqui es donde va el contenido
                          </Typography>
                          <div className={styles.taskOptions}>
                          <IconButton  >
                            <EditIcon className={styles.taskOptionsSingle} />
                          </IconButton>
                          <IconButton className={styles.taskOptions}>
                            <DeleteIcon className={styles.taskOptionsSingle} />
                          </IconButton>
                        </div>
                        </CardContent>
                        
                      </Card>
                    
                  
              </div>
    </div>
    );
}

