import { useState } from 'react';

export const useFormModal= () => {

     //state
  const [formState, setFormState] = useState({
    name: "",
    amount: 0,
    description: "",
    category: "",
    date: "",
  });

  const createdDate = new Date().toISOString();
  const [today] = createdDate.split("T");

  const onChangeFormModal = (name, value)=> {
    setFormState((previusValue) => ({
        ...previusValue,
        [name]: value,
      }));
  }


  return{
    today,
    formState,
    onChangeFormModal
  }
}