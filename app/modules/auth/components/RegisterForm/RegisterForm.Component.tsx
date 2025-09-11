'use client'

import TextField from '@/app/modules/common/components/TextInput/TextField.Component'
import React, { FormEvent } from 'react'
import styles from './RegisterForm.module.scss'
import { useTranslations } from 'next-intl'
import { useAuth } from '../../contexts/Auth.Context'
import Button from '@/app/modules/common/components/Button/Button.Component'
import Checkbox from '@/app/modules/common/components/Checkbox/Checkbox.Component'
import Autocomplete from '@/app/modules/common/components/Autocomplete/Autocomplete.Component'
import { useGetCountryOptions } from '../../hooks/useGetCountryOptions'

const RegisterForm = () => {
  const t = useTranslations('register.form')
  const { register } = useAuth()
  const { data: countryOptions } = useGetCountryOptions()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const fields = Object.fromEntries(formData)
    register()
  }

  // TODO - zrobic walidacje dla hasla i dla repeat hasla
  return (
    <form className={styles['register-form']} onSubmit={handleSubmit}>
      <div className={styles['form-row']}>
        <TextField
          label={t('firstName')}
          name='firstName'
          required
        />
        <TextField
          label={t('lastName')}
          name='lastName'
          required
        />
      </div>
      <TextField
        label={t('email')}
        name='email'
        type='email'
        required
      />
      <TextField
        label={t('login')}
        name='login'
        autoComplete='username'
        required
      />
      <Autocomplete
        label={t('country')}
        name='country'
        required
        options={countryOptions}
      />
      <div className={styles['form-row']}>
        <TextField
          label={t('password')}
          name='password'
          type='password'
          autoComplete='new-password'
          required
        />
        <TextField
          label={t('repeatPassword')}
          name='repeatPassword'
          type='password'
          autoComplete='new-password'
          required
        />
      </div>
      <Checkbox
        label={t('regulations')}
        name='regulations'
        required
      />
      <Checkbox
        label={t('newsletter')}
        name='newsletter'
      />
      <Button
        variant='contained'
        startIcon={'🚀'}
        type='submit'
      >
        {t('register')}
      </Button>
    </form>
  )
}

export default RegisterForm