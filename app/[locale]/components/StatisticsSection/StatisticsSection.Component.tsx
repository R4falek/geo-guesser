import { useTranslations } from 'next-intl'
import React from 'react'
import Section from '../common/Section/Section.Component'
import styles from './StatisticsSection.module.scss'

const StatisticsSection = () => {
  const t = useTranslations('home.statisticsSection')
  return (
    <Section
      id='statistics'
      title={<h1 className={styles.title}>{t('title')}</h1>}
      classes={styles['statistics-section']}
    >

    </Section>
  )
}

export default StatisticsSection