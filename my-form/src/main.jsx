import React from 'react'
import ReactDOM from 'react-dom/client'
import FormInput from './componentes/FormInput'
import FormMultipleInputs from './componentes/FormMultipleInputs'
import FormTextArea from './componentes/FormTextArea'
import FormSelect from './componentes/FormSelect'
import FormValidation from './componentes/FormValidation'
import FormErrorMessage from './componentes/FormErrorMessage'
import NameFormNC from './componentes/NameFormNC'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormInput /><br/>
    <FormMultipleInputs /><br/>
    <FormTextArea /><br/>
    <FormSelect /><br/>
    <FormValidation /><br/>
    <FormErrorMessage /><br/>
    <NameFormNC /><br/>
  </React.StrictMode>,
)
