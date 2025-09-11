import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './LoginCard.module.scss'
import Link from 'next/link'
import FormCard from '@/app/modules/common/components/FormCard/FormCard.Component'
import LoginForm from '@/app/modules/auth/components/LoginForm/LoginForm.Component'
import Button from '@/app/modules/common/components/Button/Button.Component'

const LoginCard = () => {
  const t = useTranslations('login')
  return (
    <FormCard className={styles['login-card']}>
      <h1>🌍</h1>
      <h1>{t('title')}</h1>
      <LoginForm />
      <div className={styles['btn-cont']}>
        <Button variant='outlined'>{t('googleBtn')}</Button>
        <Button variant='outlined'>{t('facebookBtn')}</Button>
        <Button variant='outlined'>{t('twitterBtn')}</Button>
      </div>
      <p>{t('noAccount')} <Link className={styles.link} href={'/register'}>{t('register')}</Link></p>
    </FormCard>
  )
}

export default LoginCard