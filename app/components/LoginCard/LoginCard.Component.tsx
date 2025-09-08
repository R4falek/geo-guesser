import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './LoginCard.module.scss'
import LoginForm from '../LoginForm/LoginForm.Component'
import Paper from '../common/Paper/Paper.Component'
import Button from '../common/Button/Button.Component'
import Link from 'next/link'

const LoginCard = () => {
  const t = useTranslations('login')

  return (
    <Paper className={styles['login-cont']}>
      <h1>🌍</h1>
      <h1>{t('title')}</h1>
      <LoginForm />
      <div className={styles['btn-cont']}>
        <Button variant='outlined'>{t('googleBtn')}</Button>
        <Button variant='outlined'>{t('facebookBtn')}</Button>
        <Button variant='outlined'>{t('twitterBtn')}</Button>
      </div>
      <p>{t('noAccount')} <Link className={styles.link} href={'/register'}>{t('register')}</Link></p>
    </Paper>
  )
}

export default LoginCard