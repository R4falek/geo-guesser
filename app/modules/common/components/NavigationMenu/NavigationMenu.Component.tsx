import React from 'react'
import styles from './NavigationMenu.module.scss'
import { useTranslations } from 'next-intl'
import { NavigationItem } from '../../models/NavigationItem.Model'
import Link from 'next/link'
import Button from '../Button/Button.Component'

interface NavigationMenuProps {
    items: NavigationItem[]
}

const NavigationMenu = ({ items }: NavigationMenuProps) => {
  const t = useTranslations('appBar')
  return (
    <nav className={styles['nav-menu']}>
      {items.map((item: NavigationItem) => (
        <Link
          key={item.id}
          href={item.link ?? '#'}
        >
          <Button
            startIcon={item.icon}
            size='small'
            variant={item.variant}
          >
            {t(item.title)}
          </Button>
        </Link>
      ))}
    </nav>
  )
}

export default NavigationMenu