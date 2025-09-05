'use client'
import React from 'react'
import Button from '../Button/Button.Component'
import styles from './LanguageToggler.module.scss'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import Image from 'next/image'

const LanguageToggler = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const toggleLanguage = () => {
    const newLanguage = locale === 'pl' ? 'en' : 'pl'
    router.replace(pathname, { locale: newLanguage })
    router.refresh()
  }

  return (
    <Button
      onClick={toggleLanguage}
      className={styles.languageToggler}
    >
      <div className={styles.iconContainer}>
        <Image
          src={'icons/icon_pl.svg'}
          alt='polish'
          width={16}
          height={16}
          className={`${styles.icon} ${styles.sunIcon} ${locale === 'en' ? styles.active : ''}`}
        />
        <Image
          src={'icons/icon_en.svg'}
          alt='english'
          width={16}
          height={16}
          className={`${styles.icon} ${styles.moonIcon} ${locale === 'pl' ? styles.active : ''}`}
        />
      </div>
    </Button>
  )
}

export default LanguageToggler