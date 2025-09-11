'use client'

import React, { useState } from 'react'
import MuiTextField, { TextFieldProps } from '@mui/material/TextField'
import styles from './TextField.module.scss'
import { FormLabel } from '@mui/material'

const TextField = (props: TextFieldProps) => {
  const [error, setError] = useState<string>()

  const handleError = (e: React.InvalidEvent<HTMLInputElement>) => {
    e.preventDefault()
    props?.onInvalid?.(e)
    setError(e.target.validationMessage)
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault()
    props?.onFocus?.(e)
    setError(undefined)
  }

  return (
    <div className={styles['text-field']}>
      <FormLabel className={styles['text-field__label']}>{props.label}</FormLabel>
      <MuiTextField
        {...props}
        label=''
        className={`${styles['text-field__input']} ${props.className || ''}`}
        onInvalid={handleError}
        error={!!error}
        // TODO - tlumacznie helper text
        helperText={error}
        onFocus={handleFocus}
      />
    </div>
  )
}

export default TextField