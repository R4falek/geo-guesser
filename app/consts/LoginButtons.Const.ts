import { NavigationItem } from '../../models/NavigationItem.Model';

export const LoginButtons: NavigationItem[] = [
  {
    title: 'login',
    icon: '🔓',
    variant: 'outlined',
    id: 'login',
    link: '/login',
  },
  {
    title: 'register',
    icon: '🚀',
    variant: 'contained',
    id: 'register',
    link: '/register',
  },
]