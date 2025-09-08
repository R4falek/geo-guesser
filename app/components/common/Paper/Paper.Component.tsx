import React from 'react'
import MuiPaper, { PaperProps } from '@mui/material/Paper';
import styles from './Paper.module.scss'

const Paper = (props: PaperProps) => {
  return (
    <MuiPaper {...props} className={`${styles.paper} ${props.className}`}>
      {props.children}
    </MuiPaper>
  )
}

export default Paper