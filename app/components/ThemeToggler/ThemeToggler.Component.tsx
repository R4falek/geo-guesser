'use client'

import { useThemeStore } from '@/app/stores/themeStore'
import { useEffect } from 'react'

export const ThemeToggle = () => {
  const theme = useThemeStore(state => state.theme)
  const toggleTheme = useThemeStore(state => state.toggleTheme)
  const setTheme = useThemeStore(state => state.setTheme)


  useEffect(() => {
    if (!theme) {return}
    setTheme(theme)
    console.log('object');
  }, [setTheme, theme])

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'} {theme}
    </button>
  )
}