import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.scss'

interface LogoProps {
  width?: number
  height?: number
}

const Logo = ({ width = 200, height = 40 }: LogoProps) => {
  return (
    <Link
      href={'/dashboard'}
      className={styles.logoLink}
      style={{ height: `${height}px` }}
    >
      <Image
        src="/images/logo.png"
        alt="Logo image"
        width={width}
        height={height}
      />
    </Link>
  )
}

export default Logo