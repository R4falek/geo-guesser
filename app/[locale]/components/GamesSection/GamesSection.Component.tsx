import React from 'react'
import Section from '../common/Section/Section.Component'
import { useTranslations } from 'next-intl'
import styles from './GamesSection.module.scss'

const GamesSection = () => {
  const t = useTranslations('home.gamesSection')
  return (
    <Section
      id='games'
      title={<h1 className={styles.title}>{t('title')}</h1>}
      body={t('body')}
      classes={styles['games-section']}
    >

    </Section>
  )
}

export default GamesSection