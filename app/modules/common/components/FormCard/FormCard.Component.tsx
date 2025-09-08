import React from 'react'
import styles from './FormCard.module.scss'
import Paper from '../Paper/Paper.Component'

interface FormCardProps {
  className?: string
  children: React.ReactNode
}

const FormCard = ({ children, className }: FormCardProps) => {
  return (
    <Paper className={`${className} ${styles['form-card']}`}>
      {children}
    </Paper>
  )
}

export default FormCard