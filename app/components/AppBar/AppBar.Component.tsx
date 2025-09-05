import React from 'react'
import MUIAppBar from '@mui/material/AppBar';
import Logo from '../Logo/Logo.Component';
import styles from './AppBar.module.scss'
import { ThemeToggle } from '../ThemeToggler/ThemeToggler.Component';
import NavigationMenu from '../NavigationMenu/NavigationMenu.Component';
import { NavigationItems } from '@/app/consts/NavigationItems.Const';
import { LoginButtons } from '@/app/consts/LoginButtons.Const';

const AppBar = () => {
  return (
    <MUIAppBar position="static" className={styles.appBar}>
      <Logo />
      <NavigationMenu items={NavigationItems} />
      <NavigationMenu items={LoginButtons} />
      <ThemeToggle />
    </MUIAppBar>
  )
}

export default AppBar