import React, { ReactNode } from 'react'
import styles from './GameCard.module.scss'
import { useTranslations } from 'next-intl'
import Paper from '@/app/modules/common/components/Paper/Paper.Component'
import Chip from '@/app/modules/common/components/Chip/Chip.Component'

interface GameCardProps {
    icon?: ReactNode
    title?: string
    text?: string
    isLocked?: boolean
    isFree?: boolean
}

const GameCard = ({ icon, title, text, isLocked, isFree }: GameCardProps) => {
  const t = useTranslations('home.gamesSection.gameCard')
  return (
    <Paper className={styles['game-card']}>
      <div className={`${styles.icon} ${styles.icon__animated}`}>{icon}</div>
      <h1 className={styles.title}>{title}</h1>
      <p>{text}</p>
      <Chip
        size='small'
        variant='filled'
        label={isFree ? t('freeBtn') : t('premiumBtn')}
      />
      {isLocked && <div className={styles['locked-overlay']}>
        <div className={styles.icon}>🔒</div>
        <p>{t('registrationRequired')}</p>
      </div>}
    </Paper>
  )
}

export default GameCard