import { useTranslations } from 'next-intl'
import React from 'react'
import Button from '../Button/Button.Component'
import styles from './LoginForm.module.scss'
import TextField from '../TextInput/TextField.Component'

const LoginForm = () => {
  const t = useTranslations('login.form')
  return (
    <form className={styles['login-form']}>
      <TextField
        label={t('email')}
      />
      <TextField
        label={t('password')}
      />
      <Button variant='contained' startIcon={'🎮'}>{t('login')}</Button>
    </form>
  )
}

export default LoginForm