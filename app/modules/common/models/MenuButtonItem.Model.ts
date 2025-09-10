import { ReactNode } from 'react';

export interface MenuButtonItem {
    label: string;
    onClick?: () => void;
    icon?: ReactNode;
}