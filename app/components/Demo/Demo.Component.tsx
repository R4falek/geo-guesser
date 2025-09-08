import React from 'react'
import Paper from '../common/Paper/Paper.Component'
import { GoogleStreetView } from '../GoogleStreetView/GoogleStreetView.Component'
import { useTranslations } from 'next-intl'
import styles from './Demo.module.scss'
import Chip from '../common/Chip/Chip.Component'

const Demo = () => {
  const t = useTranslations('home.demoSection.demo')

  return (
    <Paper className={styles.demo}>
      <GoogleStreetView height={500} />
      <div className={styles['btn-cont']}>
        <Chip variant='outlined' label={t('badge1')} />
        <Chip variant='outlined' label={t('badge2')} />
        <Chip variant='outlined' label={t('badge3')} />
        <Chip variant='outlined' label={t('badge4')} />
      </div>
      <ol className={styles.instructions}>
        <li><p>{t('instructionStep1')}</p></li>
        <li><p>{t('instructionStep2')}</p></li>
        <li><p>{t('instructionStep3')}</p></li>
        <li><p>{t('instructionStep4')}</p></li>
      </ol>
    </Paper>
  )
}

export default Demo