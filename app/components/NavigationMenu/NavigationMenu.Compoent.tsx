import React from 'react'
import styles from './NavigationMenu.module.scss'
import Button from '../Button/Button.Component'
import { NavigationItem } from '@/app/Models/NavigationItem.Model'

interface NavigationMenuProps {
    items: NavigationItem[]
}

const NavigationMenu = ({ items }: NavigationMenuProps) => {
  return (
    <div className={styles['nav-menu']}>
      {items.map((item: NavigationItem) => (
        <Button
          startIcon={item.icon}
          size='small'
          variant={item.variant}
          key={item.title}>
          {item.title}
        </Button>
      ))}
    </div>
  )
}

export default NavigationMenu