import React, { ReactNode } from 'react'
import styles from './Section.module.scss'

interface SectionProps {
    title?: ReactNode
    subtitle?: string
    body?: string
    children?: ReactNode
    classes?: string
}

const Section = ({ title, subtitle, body, children, classes }: SectionProps) => {
  return (
    <section className={`${styles.section} ${classes}`}>
      <div className={styles.section__cont}>
        {title}
        {subtitle && <h2 className={styles.subTitle}>{subtitle}</h2>}
        {body && <p className={styles.body}>{body}</p>}
      </div>
      {children}
    </section>
  )
}

export default Section