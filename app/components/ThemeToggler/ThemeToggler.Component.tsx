'use client'

import { useThemeStore } from '@/app/stores/themeStore'
import { useEffect } from 'react'
import { Moon, Sun } from 'lucide-react';
import styles from './ThemeToggle.module.scss'

export const ThemeToggle = () => {
  const theme = useThemeStore(state => state.theme)
  const toggleTheme = useThemeStore(state => state.toggleTheme)
  const setTheme = useThemeStore(state => state.setTheme)

  useEffect(() => {
    if (!theme) {return}
    setTheme(theme)
  }, [setTheme, theme])

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className={styles.iconContainer}>
        <Sun
          className={`${styles.icon} ${styles.sunIcon} ${theme === 'light' ? styles.active : ''}`}
          size={24}
        />
        <Moon
          className={`${styles.icon} ${styles.moonIcon} ${theme === 'dark' ? styles.active : ''}`}
          size={24}
        />
      </div>
    </button>
  )
}