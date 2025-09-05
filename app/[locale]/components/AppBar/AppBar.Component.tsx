import React from 'react'
import MUIAppBar from '@mui/material/AppBar';
import Logo from '../Logo/Logo.Component';
import styles from './AppBar.module.scss'
import { ThemeToggle } from '../ThemeToggler/ThemeToggler.Component';
import NavigationMenu from '../NavigationMenu/NavigationMenu.Component';
import { NavigationItems } from '@/app/[locale]/consts/NavigationItems.Const';
import { LoginButtons } from '@/app/[locale]/consts/LoginButtons.Const';
import LanguageToggler from '../LanguageToggler/LanguageToggler.Component';

const AppBar = () => {
  return (
    <MUIAppBar position="static" className={styles.appBar}>
      <Logo />
      <NavigationMenu items={NavigationItems} />
      <NavigationMenu items={LoginButtons} />
      <div className={styles.togglers}>
        <ThemeToggle />
        <LanguageToggler />
      </div>
    </MUIAppBar>
  )
}

export default AppBar