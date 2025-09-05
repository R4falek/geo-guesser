import { ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

export interface NavigationItem {
    icon?: ReactNode
    title: string
    link?: string
    variant?: ButtonProps['variant']
}