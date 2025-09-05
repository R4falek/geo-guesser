import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './DemoSection.module.scss'
import Section from '../common/Section/Section.Component'
import Demo from '../Demo/Demo.Component'

const DemoSection = () => {
  const t = useTranslations('home.demoSection')
  return (
    <Section
      title={<h1 className={styles.title}>{t('title')}</h1>}
      body={t('body')}
      classes={styles['demo-section']}
    >
      <Demo />
    </Section>
  )
}

export default DemoSection