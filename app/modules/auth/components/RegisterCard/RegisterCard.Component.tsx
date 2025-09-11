import FormCard from '@/app/modules/common/components/FormCard/FormCard.Component'
import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './RegisterCard.module.scss'
import Button from '@/app/modules/common/components/Button/Button.Component'
import { Link } from '@/i18n/navigation'
import RegisterForm from '../RegisterForm/RegisterForm.Component'

const RegisterCard = () => {
  const t = useTranslations('register')
  return (
    <FormCard className={styles['register-card']}>
      <h1>🌍</h1>
      <h1>{t('title')}</h1>
      <span>{t('subtitle')}</span>
      <RegisterForm />
      <p className={styles.divider}>{t('registerTrough')}</p>
      <div className={styles['btn-cont']}>
        <Button variant='outlined'>{t('googleBtn')}</Button>
        <Button variant='outlined'>{t('facebookBtn')}</Button>
        <Button variant='outlined'>{t('twitterBtn')}</Button>
      </div>
      <p>{t('hasAccount')} <Link className={styles.link} href={'/login'}>{t('login')}</Link></p>
    </FormCard>
  )
}

export default RegisterCard