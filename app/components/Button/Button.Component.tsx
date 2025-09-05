import React from 'react'
import styles from './Button.module.scss'
import MuiButton, { ButtonProps } from '@mui/material/Button';

const Button = (props: ButtonProps) => {
  return (
    <MuiButton {...props} className={`${styles.button} ${props.className}`}/>
  )
}

export default Button