'use client'

import { useThemeStore } from '@/app/stores/themeStore'
import { useEffect } from 'react'
import { Moon, Sun } from 'lucide-react';
import styles from './ThemeToggle.module.scss'
import Button from '../Button/Button.Component';

export const ThemeToggle = () => {
  const theme = useThemeStore(state => state.theme)
  const toggleTheme = useThemeStore(state => state.toggleTheme)
  const setTheme = useThemeStore(state => state.setTheme)

  // TODO - pewnie trzeba wynieść do page
  useEffect(() => {
    if (!theme) {return}
    setTheme(theme)
  }, [setTheme, theme])

  return (
    <Button
      onClick={toggleTheme}
      className={styles.themeToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className={styles.iconContainer}>
        <Sun
          className={`${styles.icon} ${styles.sunIcon} ${theme === 'light' ? styles.active : ''}`}
          size={16}
        />
        <Moon
          className={`${styles.icon} ${styles.moonIcon} ${theme === 'dark' ? styles.active : ''}`}
          size={16}
        />
      </div>
    </Button>
  )
}