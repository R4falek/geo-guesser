'use client'

import { useTranslations } from 'next-intl'
import React, { FormEvent } from 'react'
import Button from '../../../common/components/Button/Button.Component'
import styles from './LoginForm.module.scss'
import TextField from '../../../common/components/TextInput/TextField.Component'
import { useAuth } from '@/app/modules/auth/contexts/Auth.Context'

const LoginForm = () => {
  const t = useTranslations('login.form')
  const { login } = useAuth()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const fields = Object.fromEntries(formData)
    login(fields.email as string, fields.password as string)
  }

  return (
    <form className={styles['login-form']} onSubmit={handleSubmit}>
      <TextField
        label={t('email')}
        name='email'
        type='email'
        required
      />
      <TextField
        label={t('password')}
        name='password'
        type='password'
        required
      />
      <Button
        variant='contained'
        startIcon={'🎮'}
        type='submit'
      >
        {t('login')}
      </Button>
    </form>
  )
}

export default LoginForm