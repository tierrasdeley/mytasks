import React from "react";
import App from "../App";
import styles from "./styles/task.module.css";
import {data} from "../data";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export function Task () {
  return (  
    <div className={styles.task}>
              <div>
                  {data.map((data, key)=>{
                    return (  
                      <Card sx={{ minWidth: 275 }} className={styles.singleTask}>
                        <CardContent>
                          <Typography variant="h5" component="div">
                            {data.title}
                          </Typography>
                          <Typography variant="h7" component="div">
                            {data.content}
                          </Typography>
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>
    </div>
    );
}

