/**
 *
 * FormComponents
 *
 */
import React, { useState } from 'react';

export const ContextComponent = React.createContext({});

interface Props {

}

var currentValues = {}
export const FormProvider = props => {

  const [valuesInput, handleChangeValues] = useState();
  const [stateProcess, handleChangeProcess] = useState({ error: false, submiting: false });


  const handleChange = (evt: any, ) => {
    currentValues[evt.target.name] = evt.target.value
    handleChangeValues(currentValues)
  }

  return (
    <ContextComponent.Provider value={{ handleChange, valuesInput }} >
      {props.children}
    </ ContextComponent.Provider>

  );
}

export default FormProvider;
