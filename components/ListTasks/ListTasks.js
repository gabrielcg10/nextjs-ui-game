
import React from 'react'
import { map } from "lodash";
import { Image, Grid } from 'semantic-ui-react';
import Link from 'next/link';


export default function ListTasks(props) {
    const {tasks} = props;

    return (
        <div className="list-tasks">
           <Grid>
               <Grid.Row>
               {map(tasks, (task) =>(
                <Task task={task} />
                ))}
               </Grid.Row>
           </Grid>
           
        </div>
    )
}

function Task(props){
    const { task } = props;
    
    return(
        <Grid.Column className="list-tasks__task">
            
                   
                    <h2>{task.title}</h2>
                    <h2>{task.description}</h2>
           
        </Grid.Column>
    )
}