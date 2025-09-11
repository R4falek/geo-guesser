'use client'

import { SnackbarProvider } from 'notistack'
import { ReactNode } from 'react'

interface NotificationProviderProps {
  children: ReactNode
}

export function NotificationProvider({ children }: NotificationProviderProps) {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transitionDuration={400}
      autoHideDuration={3000}
      preventDuplicate
    >
      {children}
    </SnackbarProvider>
  )
}