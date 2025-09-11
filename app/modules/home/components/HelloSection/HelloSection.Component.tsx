import { useAuth } from '@/app/modules/auth/contexts/Auth.Context'
import Section from '@/app/modules/common/components/Section/Section.Component'
import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './HelloSection.module.scss'

const HelloSection = () => {
  const { user } = useAuth()
  const t = useTranslations('home.helloSection')
  return (
    <Section
      id=''
      title={<h1 className={styles.title}>{`${t('title')} ${user?.login}${t('titleSuffix')}`}</h1>}
      subtitle={t('subtitle')}
    />
  )
}

export default HelloSection