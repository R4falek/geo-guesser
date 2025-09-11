'use client'

import React, { useState } from 'react'
import MuiAutocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'
import MuiTextField from '@mui/material/TextField'
import styles from './Autocomplete.module.scss'
import { FormLabel } from '@mui/material'

interface CustomAutocompleteProps<T> extends Omit<AutocompleteProps<T, false, false, false>, 'renderInput'> {
  label: string
  name: string
  required?: boolean
}

const Autocomplete = <T,>(props: CustomAutocompleteProps<T>) => {
  const [error, setError] = useState<string>()
  const { label, name, required, ...autocompleteProps } = props

  const handleError = (e: React.InvalidEvent<HTMLInputElement>) => {
    e.preventDefault()
    setError(e.target.validationMessage)
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault()
    setError(undefined)
  }

  return (
    <div className={styles.autocomplete}>
      <FormLabel className={styles.autocomplete__label}>{label}</FormLabel>
      <MuiAutocomplete
        {...autocompleteProps}
        id={name}
        className={`${styles.autocomplete__input} ${props.className || ''}`}
        renderInput={(params) => (
          <MuiTextField
            {...params}
            onInvalid={handleError}
            onFocus={handleFocus}
            required={required}
            error={!!error}
            helperText={error}
          />
        )}
      />
    </div>
  )
}

export default Autocomplete