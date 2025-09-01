import React from 'react'
import styles from './Button.module.scss'

const Button = ({ variant = 'primary' }) => {
  return (
    <button className={`${styles.button} ${variant === 'secondary' ? styles.secondary : ''}`}/>
  )
}

export default Button