import { FormControlLabel } from '@mui/material'
import React, { useState } from 'react'
import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox'
import styles from './Checkbox.module.scss'

interface CheckboxProps extends MuiCheckboxProps {
    label: string
}

const Checkbox = (props: CheckboxProps) => {
  const [error, setError] = useState<string>()

  const handleError = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    props?.onInvalid?.(e)
    if (!('validationMessage' in e.target)) {
      return
    }
    setError(e.target.validationMessage as string)
  }

  const handleFocus = (e: React.FocusEvent<HTMLButtonElement, Element>) => {
    e.preventDefault()
    props?.onFocus?.(e)
    setError(undefined)
  }

  return (
    <div className={styles.checkbox}>
      <FormControlLabel
        control={(
          <MuiCheckbox
            {...props}
            className={`${styles.checkbox__input} ${props.className || ''}`}
            onInvalid={handleError}
            onFocus={handleFocus}
          />
        )}
        label={props?.label}
      />
      {error && (
        // TODO tlumaczenie error
        <p className={styles.checkbox__error}>{error}</p>
      )}
    </div>
  )
}

export default Checkbox