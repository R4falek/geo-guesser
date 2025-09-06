import React from 'react'
import Section from '../common/Section/Section.Component'
import { useTranslations } from 'next-intl'
import styles from './GamesSection.module.scss'
import GameCard from '../GameCard/GameCard.Component'

const games = [
  {
    id: 1,
    icon: '🌍',
    isLocked: false,
    isFree: true,
    title: 'Świat',
    text: 'Klasyczny tryb GeoGuesser. Odgaduj lokalizacje z każdego zakątka naszej planety!',
  },
  {
    id: 2,
    icon: '🏰',
    isLocked: false,
    isFree: true,
    title: 'Europa',
    text: 'Sprawdź swoją znajomość europejskich krajów, miast i zabytków.',
  },
  {
    id: 3,
    icon: '🏙️',
    isLocked: true,
    isFree: false,
    title: 'Wielkie miasta',
    text: 'Czy rozpoznasz największe metropolie i stolice świata?',
  },
  {
    id: 4,
    icon: '📸',
    isLocked: true,
    isFree: false,
    title: 'Słynne miejsca',
    text: 'Znajdź najbardziej rozpoznawalne zabytki i atrakcje turystyczne.',
  },
]


const GamesSection = () => {
  const t = useTranslations('home.gamesSection')
  return (
    <Section
      id='games'
      title={<h1 className={styles.title}>{t('title')}</h1>}
      body={t('body')}
      classes={styles['games-section']}
    >
      <div className={styles['games-cont']}>
        {games.map(game => <GameCard key={game.id} {...game} />)}
      </div>
    </Section>
  )
}

export default GamesSection