import { useTranslations } from 'next-intl'
import React from 'react'
import { useGetUserGameStatistics } from '../../hooks/useGetUserGameStatistics'
import Section from '@/app/modules/common/components/Section/Section.Component'
import StatisticsCard from '../StatisticsCard/StatisticsCard.Component'
import styles from './UserStatisticsSection.module.scss'

const UserStatisticsSection = () => {
  const t = useTranslations('home.userStatisticsSection')
  const { data: statistics } = useGetUserGameStatistics()
  return (
    <Section
      id='statistics'
      title={<h1 className={styles.title}>{t('title')}</h1>}
      classes={styles['user-statistics-section']}
    >
      <div className={styles['user-statistics-cont']}>
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

export default UserStatisticsSection