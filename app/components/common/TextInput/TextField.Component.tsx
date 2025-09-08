import React from 'react'
import MuiTextField, { TextFieldProps } from '@mui/material/TextField'
import styles from './TextField.module.scss'

const TextField = (props: TextFieldProps) => {
  return (
    <MuiTextField {...props} className={`${styles['text-field']} ${props.className} `}/>
  )
}

export default TextField