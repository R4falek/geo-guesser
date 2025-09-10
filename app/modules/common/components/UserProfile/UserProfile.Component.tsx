import React from 'react'
import styles from './UserProfile.module.scss'
import { useAuth } from '@/app/modules/auth/contexts/Auth.Context'
import MenuButton from '../MenuButton/MenuButton.Component'
import { Avatar } from '@mui/material'
import { useRouter } from '@/i18n/navigation'


const UserProfile = () => {
  const { user, logout } = useAuth()
  const router = useRouter()

  const profileMenuItems = [
    {
      label: 'Go to Profile',
      onClick: () => router.push('/profile'),
      icon: '👤',
    },
    {
      label: 'Logout',
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
        <Avatar className={styles.avatar}>af</Avatar>
      </div>
      {user?.login}
    </MenuButton>
  )
}

export default UserProfile