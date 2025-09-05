import React from 'react'
import styles from './NavigationMenu.module.scss'
import Button from '../common/Button/Button.Component'
import { useTranslations } from 'next-intl'
import { NavigationItem } from '../../models/NavigationItem.Model'

interface NavigationMenuProps {
    items: NavigationItem[]
}

const NavigationMenu = ({ items }: NavigationMenuProps) => {
  const t = useTranslations('appBar')
  return (
    <div className={styles['nav-menu']}>
      {items.map((item: NavigationItem) => (
        <Button
          startIcon={item.icon}
          size='small'
          variant={item.variant}
          key={item.title}>
          {t(item.title)}
        </Button>
      ))}
    </div>
  )
}

export default NavigationMenu