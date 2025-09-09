import { useTranslations } from 'next-intl'
import React from 'react'
import styles from './StatisticsSection.module.scss'
import Section from '@/app/modules/common/components/Section/Section.Component'
import { useGetStatistics } from '../../hooks/useGetStatistics'
import StatisticsCard from '../StatisticsCard/StatisticsCard.Component'

const StatisticsSection = () => {
  const t = useTranslations('home.statisticsSection')
  const { data: statistics } = useGetStatistics()
  return (
    <Section
      id='statistics'
      title={<h1 className={styles.title}>{t('title')}</h1>}
      classes={styles['statistics-section']}
    >
      <div className={styles['statistics-cont']}>
        {statistics?.map(stat => (
          <StatisticsCard
            key={stat.id}
            label={t(`statistics.${stat.id}`)}
            value={stat.value}
            suffix={stat.suffix}
          />
        ))}
      </div>
    </Section>
  )
}

export default StatisticsSection