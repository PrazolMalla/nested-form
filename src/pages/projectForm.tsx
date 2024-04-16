import React from 'react'
import { useFieldArray } from 'react-hook-form'
import { TextInput,Fieldset,Button } from '@mantine/core';
import TaskForm from './taskForm';

export default function ProjectForm({control,register,setValue,getValues}:{control:any,register:any,setValue:any,getValues:any}) {
  const{fields,append,remove} = useFieldArray({
    name:'project',
    control,
    rules:{
      required:'error',
    }
  });
  return (
    <>
      <ul>
        {fields.map((item,index)=>{
          return(
            <li key={item.id}>
                <Fieldset legend="Project" variant='filled'> 
                  <TextInput 
                    label="Project Name" 
                    withAsterisk 
                  
                    placeholder='Project Name' 
                    {...register(`project.${index}.projectName`,{required:true})}/>
                    {/* <p>{errors?.project?.projectName?.message}</p> */}
                  <TextInput 
                    label="Project Description" 
                    withAsterisk 
        
                    placeholder='Project Description'
                    {...register(`project.${index}.projectDescription`,{required:true})}/>
                    <br/>
                  <TaskForm taskIndex={index}{...{control,register,setValue,getValues}}/>
                  <br/>

                  <Button type='button' onClick={()=>remove(index)} variant ="filled" color="pink">Delete Project</Button>
                </Fieldset>
                
            </li>
          );
        })}
      </ul>
      <Button 
        type='button' 
        onClick={()=> 
          setValue('project',[
            ...(getValues().project||[]),{
              projectName:'',
              projectDescription:'',
              task:[
                {
                  taskName:'',
                  taskDescription:'',
                  assigned:[{
                    workerName:'',
                    workerEmail:'',
                  }]
                }]
            }
          ])
        } 
        variant ="filled" color="green">Add Project</Button>
    </>
  )
}


