'use client'

import { enqueueSnackbar, OptionsObject } from 'notistack';

export const showSuccessSnackbar = (message: string) =>
  enqueueSnackbar(message, { variant: 'success' })

export const showErrorSnackbar = (message: string) =>
  enqueueSnackbar(message, { variant: 'error' })

export const showWarningSnackbar = (message: string) =>
  enqueueSnackbar(message, { variant: 'warning' })

export const showInfoSnackbar = (message: string) =>
  enqueueSnackbar(message, { variant: 'info' })

export const showSnackbar = (message: string, options?: OptionsObject) =>
  enqueueSnackbar(message, options)
