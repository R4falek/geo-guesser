import React from 'react'
import styles from './StatisticsCard.module.scss'
import CountingValue from '@/app/modules/common/components/CountingValue/CountingLabel.Component'

interface StatisticsCardProps{
  value: number,
  suffix?: string
  label: string
}

const StatisticsCard = ({ label, value, suffix }: StatisticsCardProps) => {
  return (
    <div className={styles['statistics-card']}>
      <CountingValue
        value={value}
        suffix={suffix}
        className={styles['statistics-card__value']}
      />
      <span className={styles['statistics-card__label']}>{label}</span>
    </div>
  )
}

export default StatisticsCard