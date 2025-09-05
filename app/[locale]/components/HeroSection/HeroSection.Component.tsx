import React from 'react'
import Button from '../common/Button/Button.Component'
import { useTranslations } from 'next-intl'
import styles from './HeroSection.module.scss'
import TypewriterLabel from '../common/TypewriterLabel/TypewriterLabel.Component'
import Section from '../common/Section/Section.Component'

const HeroSection = () => {
  const t = useTranslations('home.heroSection')
  return (
    <Section
      title={
        <TypewriterLabel
          className={styles.title}
          label={t('title')}
          delay={200}
          speed={200}
        />
      }
      subtitle={t('subtitle')}
      body={t('body')}
      classes={styles['hero-section']}
    >
      <div className={styles['btn-container']}>
        <Button size='medium' variant='contained'>{t('playButton')}</Button>
        <Button size='medium' variant='outlined'>{t('demoButton')}</Button>
      </div>
    </Section>
  )
}

export default HeroSection