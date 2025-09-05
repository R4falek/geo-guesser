import React from 'react'
import styles from './Chip.module.scss'
import MuiChip, { ChipProps } from '@mui/material/Chip'

const Chip = (props: ChipProps) => {
  return (
    <MuiChip {...props} className={`${styles.chip} ${props.className}`} />
  )
}

export default Chip