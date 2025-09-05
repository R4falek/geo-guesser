import React from 'react'
import Button from '../Button/Button.Component'
import { useTranslations } from 'next-intl'
import styles from './HeroSection.module.scss'
import TypewriterLabel from '../TypewriterLabel/TypewriterLabel.Component'

const HeroSection = () => {
  const t = useTranslations('home.heroSection')
  return (
    <div className={styles['hero-section']}>
      <div className={styles['hero-section__cont']}>
        <TypewriterLabel
          className={styles.title}
          label={t('title')}
          delay={200}
          speed={200}
        />
        <h2 className={styles.subTitle}>{t('subtitle')}</h2>
        <p className={styles.body}>{t('body')}</p>
        <div className={styles['btn-container']}>
          <Button size='medium' variant='contained'>{t('playButton')}</Button>
          <Button size='medium' variant='outlined'>{t('demoButton')}</Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection