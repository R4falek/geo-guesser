import React from 'react'
import Section from '../common/Section/Section.Component'
import { useTranslations } from 'next-intl'
import styles from './PlaySection.module.scss'
import Button from '../common/Button/Button.Component'

const PlaySection = () => {
  const t = useTranslations('home.playSection')
  return (
    <Section
      id='play'
      title={<h1 className={styles.title}>{t('title')}</h1>}
      subtitle={t('subtitle')}
      classes={styles['play-section']}
    >
      <Button
        className={styles['play-btn']}
        size='large'
        variant='contained'
      >
        {t('playButton')}
      </Button>
    </Section>
  )
}

export default PlaySection