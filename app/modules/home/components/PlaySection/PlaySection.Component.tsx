import React from 'react'
import { useTranslations } from 'next-intl'
import styles from './PlaySection.module.scss'
import Link from 'next/link'
import Section from '@/app/modules/common/components/Section/Section.Component'
import Button from '@/app/modules/common/components/Button/Button.Component'
import { showInfoSnackbar } from '@/app/modules/common/services/SnackbarService'

const PlaySection = () => {
  const t = useTranslations('home.playSection')
  return (
    <Section
      id='play'
      title={<h1 className={styles.title}>{t('title')}</h1>}
      subtitle={t('subtitle')}
      classes={styles['play-section']}
    >
      <Link href={'/play'}>
        <Button
          className={styles['play-btn']}
          size='large'
          variant='contained'
          onClick={() => showInfoSnackbar('Nie zaimplementowane')}
        >
          {t('playButton')}
        </Button>
      </Link>
    </Section>
  )
}

export default PlaySection