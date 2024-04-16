import Image from "next/image";
import { Inter } from "next/font/google";
import { Control,useFieldArray,useForm } from "react-hook-form";
import ProjectForm from "./projectForm";
import {Button } from '@mantine/core';

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const {
    register,
    formState:{errors},
    handleSubmit,
    getValues,
    setValue,
    control
  } = useForm({
    defaultValues:{
      project:[
        {
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
      ]
    }
  });


  return (
    <form onSubmit={handleSubmit((data)=>{console.log('Data',data)})}>
      <ProjectForm {...{control,register,setValue,getValues}}/>
      <br/>
      <br/>
      <Button type="submit" variant ="filled" color="green">Submit</Button>
    </form>
  );
}
