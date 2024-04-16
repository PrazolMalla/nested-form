import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { TextInput,Fieldset,Button } from '@mantine/core';
import AssignForm from './assignForm';

function TaskForm({taskIndex,control,register,setValue,getValues}:{taskIndex:any,control:any,register:any,setValue:any,getValues:any}) {
  const {fields,append,remove} = useFieldArray({
    control,
    name:`project.${taskIndex}.task`
  })
  return (
    <div>
      {fields.map((item,index)=>{
        return(
          <div key={item.id}>
            <Fieldset legend="Task" variant='filled' style={{marginRight:'25px'}}> 
                  <TextInput 
                    label="Task Name" 
                    withAsterisk 
                  
                    placeholder='Task Name' 
                    {...register(`project.${taskIndex}.task.${index}.taskName`,{required:true})}/>
                    {/* <p>{errors?.project?.projectName?.message}</p> */}
                  <TextInput 
                    label="Task Description" 
                    withAsterisk 
        
                    placeholder='Task Description '
                    {...register(`project.${taskIndex}.task.${index}.taskDescription`,{required:true})}/>
                    
                    <br/>
                  
                  <AssignForm taskIndex={taskIndex} assignIndex={index}{...{control,register}}/>
                  <br/>
                  <Button type='button' onClick={()=>remove(index)} variant ="filled" color="pink">Delete Task</Button>
                </Fieldset>
          </div>
          
        );
      })}
      <br/>
      <Button 
        type='button' 
        onClick={()=> 
          append({
            taskName:'',
            taskDescription:'',
            assigned:[{
              workerName:'',
              workerEmail:'',
            }]
          })
        } 
        variant ="filled" color="green">Add Task</Button>
    </div>
  )
}

export default TaskForm
