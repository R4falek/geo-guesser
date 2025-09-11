'use client'

import FormCard from '@/app/modules/common/components/FormCard/FormCard.Component'
import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './RegisterCard.module.scss'
import Button from '@/app/modules/common/components/Button/Button.Component'
import { Link } from '@/i18n/navigation'
import RegisterForm from '../RegisterForm/RegisterForm.Component'
import { showInfoSnackbar } from '@/app/modules/common/services/SnackbarService'

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
        <Button variant='outlined' onClick={() => showInfoSnackbar('Nie zaimplementowane')}>{t('googleBtn')}</Button>
        <Button variant='outlined' onClick={() => showInfoSnackbar('Nie zaimplementowane')}>{t('facebookBtn')}</Button>
        <Button variant='outlined' onClick={() => showInfoSnackbar('Nie zaimplementowane')}>{t('twitterBtn')}</Button>
      </div>
      <p>{t('hasAccount')} <Link className={styles.link} href={'/login'}>{t('login')}</Link></p>
    </FormCard>
  )
}

export default RegisterCard