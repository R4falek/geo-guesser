'use client'
import React, { useState, useEffect } from 'react'
import { useInView } from '@/app/hooks/useInView'

interface TypewriterLabelProps {
  label: string
  speed?: number
  delay?: number
  className?: string
  onComplete?: () => void
}

const TypewriterLabel: React.FC<TypewriterLabelProps> = ({
  label,
  speed = 50,
  delay = 0,
  className = '',
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const { isInView, ref } = useInView()

  useEffect(() => {
    if (!isInView) {
      setDisplayedText('')
      return
    }

    // eslint-disable-next-line no-undef
    let timeoutId: NodeJS.Timeout

    const startTyping = () => {
      let currentIndex = 0

      const typeNextChar = () => {
        if (currentIndex < label.length) {
          setDisplayedText(label.slice(0, currentIndex + 1))
          currentIndex++
          timeoutId = setTimeout(typeNextChar, speed)
        } else {
          onComplete?.()
        }
      }

      typeNextChar()
    }

    setDisplayedText('')
    timeoutId = setTimeout(startTyping, delay)

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [label, speed, delay, onComplete, isInView])

  return (
    <span ref={ref} className={className}>
      {displayedText}
    </span>
  )
}

export default TypewriterLabel