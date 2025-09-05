import React, { ReactNode } from 'react'
import styles from './Section.module.scss'

interface SectionProps {
    id: string
    title?: ReactNode
    subtitle?: string
    body?: string
    children?: ReactNode
    classes?: string
}

const Section = ({ id, title, subtitle, body, children, classes }: SectionProps) => {
  return (
    <section id={id} className={`${styles.section} ${classes}`}>
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