import React from 'react'
import styles from './Menu.module.scss'
import MuiMenu, { MenuProps } from '@mui/material/Menu'

const Menu = (props: MenuProps) => {
  return (
    <MuiMenu {...props} className={`${styles.menu} ${props.className}`}>
      {props.children}
    </MuiMenu>
  )
}

export default Menu