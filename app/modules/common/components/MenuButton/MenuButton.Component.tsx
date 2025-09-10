import React, { useRef, useState } from 'react'
import styles from './MenuButton.module.scss'
import Button from '../Button/Button.Component'
import { ButtonProps } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Menu from '../Menu/Menu.Component'
import { MenuButtonItem } from '../../models/MenuButtonItem.Model'

interface MenuButtonProps extends Omit<ButtonProps, 'onClick'> {
    items: MenuButtonItem[]
}

const MenuButton = (props: MenuButtonProps) => {
    const { items, children, ...buttonProps } = props
    const btnRef = useRef<HTMLButtonElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    
    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setIsOpen(true)
    }
    
    const handleClose = () => {
        setIsOpen(false)
    }

    const handleItemClick = (itemOnClick?: () => void) => {
        itemOnClick?.()
        handleClose()
    }

    return (
        <>
            <Button 
                ref={btnRef} 
                {...buttonProps} 
                className={`${styles['menu-button']} ${props.className}`}
                onClick={handleOpen}
            >
                {children}
                <span className={`${styles.arrow} ${isOpen ? styles.rotated : ''}`}>▼</span>
            </Button>
            <Menu
                anchorEl={btnRef.current}
                open={isOpen}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                {items?.map((item, index) => (
                    <MenuItem 
                        key={index}
                        onClick={() => handleItemClick(item.onClick)}
                        sx={{':hover': {background: 'rgba(0,0,0,0.3)'}}}
                    >
                        {item.icon && <span className={styles.item}>{item.icon}</span>}
                        {item.label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}

export default MenuButton