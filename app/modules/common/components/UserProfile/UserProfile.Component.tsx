import React from 'react'
import styles from './UserProfile.module.scss'
import { useAuth } from '@/app/modules/auth/contexts/Auth.Context'
import MenuButton from '../MenuButton/MenuButton.Component'
import { Avatar } from '@mui/material'
import { useTranslations } from 'next-intl'
import { showInfoSnackbar } from '../../services/SnackbarService'


const UserProfile = () => {
  const { user, logout } = useAuth()
  const t = useTranslations('appBar')

  const profileMenuItems = [
    {
      label: t('goToProfile'),
      onClick: () => showInfoSnackbar('Nie zaimplementowane'),
      icon: '👤',
    },
    {
      label: t('logout'),
      onClick: logout,
      icon: '🚪',
    },
  ]

  return (
    <MenuButton
      items={profileMenuItems}
      variant='outlined'
      size='small'
      className={styles['user-profile']}
    >
      <div className={styles['avatar-cont']}>
        {/* TODO - dodac zdjecie */}
        <Avatar className={styles.avatar}>af</Avatar>
      </div>
      {user?.login}
    </MenuButton>
  )
}

export default UserProfile