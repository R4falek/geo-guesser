'use client'

import React, { useEffect, useState } from 'react'
import { useInView } from '../../hooks/useInView'

interface CountingValueProps {
  value: number
  suffix?: string
  time?: number
  className?: string
}

const CountingValue = ({ value, suffix, time = 1000, className }: CountingValueProps) => {
  const [currentValue, setCurrentValue] = useState(0)
  const { isInView, ref } = useInView()

  const getStep = (value: number) => {
    if (Number.isInteger(value)) {return 1}
    const str = value.toString()
    const decimals = str.includes('.') ? str.split('.')[1].length : 0
    return Math.pow(10, -decimals)
  }

  const step = getStep(value)
  const decimals = Math.max(0, -Math.log10(step))
  const delay = time / (value / step)

  useEffect(() => {
    if (!isInView || value === currentValue) {return}

    const interval = setInterval(() => {
      setCurrentValue(prev => {
        return parseFloat((prev + step).toFixed(decimals))
      })
    }, delay)

    return () => clearInterval(interval)
  }, [isInView, value, step, delay, currentValue, decimals])

  return (
    <span ref={ref} className={className}>
      {currentValue}{suffix}
    </span>
  )
}

export default CountingValue
