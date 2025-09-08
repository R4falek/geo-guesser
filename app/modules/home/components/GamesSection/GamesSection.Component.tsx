import React from 'react'
import { useTranslations } from 'next-intl'
import styles from './GamesSection.module.scss'
import GameCard from '../GameCard/GameCard.Component'
import Section from '@/app/modules/common/components/Section/Section.Component'
import { useGetGames } from '../../hooks/useGetGames'

const GamesSection = () => {
  const t = useTranslations('home.gamesSection')
  const { data: games } = useGetGames()
  return (
    <Section
      id='games'
      title={<h1 className={styles.title}>{t('title')}</h1>}
      body={t('body')}
      classes={styles['games-section']}
    >
      <div className={styles['games-cont']}>
        {games?.map(game => <GameCard key={game.id} {...game} />)}
      </div>
    </Section>
  )
}

export default GamesSection