import React from 'react'
import { useFieldArray } from 'react-hook-form';
import { TextInput,Fieldset,Button } from '@mantine/core';

function AssignForm({taskIndex,assignIndex,control,register}:{taskIndex:any,assignIndex:any,control:any,register:any}) {
  const {fields,append,remove} = useFieldArray({
    control,
    name:`project.${taskIndex}.task.${assignIndex}.assigned`
  });
  return (
    <div>
      {fields.map((item,index)=>{
        return(
          <div key={item.id}>
            <Fieldset legend="Assigned" variant='filled' style={{marginRight:'25px'}}> 
                  <TextInput 
                    label="Worker Name" 
                    withAsterisk 
                  
                    placeholder='Worker Name' 
                    {...register(`project.${taskIndex}.task.${assignIndex}.assigned.${index}.workerName`,{required:true})}/>
                    {/* <p>{errors?.project?.projectName?.message}</p> */}
                  <TextInput 
                    label="Email" 
                    withAsterisk 
        
                    placeholder='your@email.com '
                    {...register(`project.${taskIndex}.task.${assignIndex}.assigned.${index}.workerEmail`,{required:true})}/>
                    <br/>
                  <Button type='button' onClick={()=>remove(index)} variant ="filled" color="pink">Delete Worker</Button>
                </Fieldset>
                <br/>
                <Button 
                  type='button' 
                  onClick={()=> 
                    append({
                        workerName:'',
                        workerEmail:'',
                    })
                  } 
                  variant ="filled" color="green">Add Worker</Button>
          </div>
          
        );
      })}
    </div>
  )
}

export default AssignForm
