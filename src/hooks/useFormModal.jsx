import { useState } from 'react';

export const useFormModal= (initialState = {} ) => {

     //state
  const [formState, setFormState] = useState(initialState);

  const createdDate = new Date().toISOString();
  const [today] = createdDate.split("T");

  const onChangeFormModal = (name, value)=> {
    setFormState((previusValue) => ({
        ...previusValue,
        [name]: value,
      }));
  }

  const resetForm = () => {
    setFormState(initialState);
  }


  return{
    today,
    formState,
    onChangeFormModal,
    resetForm
  }
}