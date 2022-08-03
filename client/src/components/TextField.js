import React from 'react'
import { Input, Label} from 'reactstrap'
import {ErrorMessage, useField} from 'formik'

export const TextField = ( {label, type, ...props}) => {
    const [field, meta] = useField(props)
  return (
    <div className="form-group">
        <Label for={field.name}>{label}</Label>
        <Input
            {...field} {...props}
            autoComplete = 'new-password' //preventing auto-complete is a nightmare...
            type={type}
            invalid={meta.touched && meta.error && meta.value }
            valid={meta.touched && !meta.error && meta.value }/>
        {meta.value?<ErrorMessage component="div" className='error' name={field.name}/>:<></>}
    </div>
  )
}
