import { ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

export interface NavigationItem {
    id: string
    icon?: ReactNode
    title: string
    link?: string
    variant?: ButtonProps['variant']
}