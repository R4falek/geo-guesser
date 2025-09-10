'use client'

import React from 'react'
import MUIAppBar from '@mui/material/AppBar';
import Logo from '../Logo/Logo.Component';
import styles from './AppBar.module.scss'
import { ThemeToggle } from '../ThemeToggler/ThemeToggler.Component';
import NavigationMenu from '../NavigationMenu/NavigationMenu.Component';
import { LoginButtons } from '@/app/modules/auth/consts/LoginButtons.Const';
import LanguageToggler from '../LanguageToggler/LanguageToggler.Component';
import { usePathname } from '@/i18n/navigation';
import { NavigationItems } from '../../consts/NavigationItems.Const';
import { useAuth } from '@/app/modules/auth/contexts/Auth.Context';
import UserProfile from '../UserProfile/UserProfile.Component';

const AppBar = () => {
  const pathname = usePathname()
  const renderAppBar = () => !pathname.includes('login') && !pathname.includes('register')
  const { user } = useAuth()

  return (
    renderAppBar()
      ? (
        <MUIAppBar position="sticky" className={styles.appBar}>
          <Logo />
          <NavigationMenu items={NavigationItems} />
          {!user
            ? <NavigationMenu items={LoginButtons} />
            : <UserProfile />
          }
          <div className={styles.togglers}>
            <ThemeToggle />
            <LanguageToggler />
          </div>
        </MUIAppBar>
      ) : (
        null
      )

  )
}

export default AppBar