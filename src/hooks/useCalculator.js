// src/hooks/useCalculator.js
import { useState, useCallback } from 'react'
import { calculatorLogic } from '../utils/calculatorLogic'

export const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [expression, setExpression] = useState([])
  const [newNumber, setNewNumber] = useState(true)
  const [memory, setMemory] = useState(0)

  const handleNumber = useCallback((num) => {
    setDisplay(prev => {
      if (newNumber || prev === '0' || prev === 'Error') {
        setNewNumber(false)
        return num
      }
      if (prev.length < 12) {
        return prev + num
      }
      return prev
    })
  }, [newNumber])

  const handleDecimal = useCallback(() => {
    setDisplay(prev => {
      if (newNumber || prev === '0' || prev === 'Error') {
        setNewNumber(false)
        return '0.'
      }
      if (!prev.includes('.') && prev.length < 12) {
        return prev + '.'
      }
      return prev
    })
  }, [newNumber])

  const handleOperator = useCallback((operator) => {
    setExpression(prev => {
      const newExpr = [...prev]
      if (display !== 'Error') {
        newExpr.push(display)
      }
      newExpr.push(operator)
      return newExpr
    })
    setNewNumber(true)
  }, [display])

  const handleEquals = useCallback(() => {
    if (display !== 'Error') {
      const finalExpr = [...expression, display]
      const result = calculatorLogic.evaluate(finalExpr)
      setDisplay(calculatorLogic.formatNumber(result))
      setExpression([])
      setNewNumber(true)
    }
  }, [display, expression])

  const handleClear = useCallback(() => {
    setDisplay('0')
    setExpression([])
    setNewNumber(true)
  }, [])

  const handleClearEntry = useCallback(() => {
    setDisplay('0')
    setNewNumber(true)
  }, [])

  const handleBackspace = useCallback(() => {
    setDisplay(prev => {
      if (prev.length > 1 && prev !== 'Error') {
        return prev.slice(0, -1)
      }
      return '0'
    })
  }, [])

  const handlePercentage = useCallback(() => {
    setDisplay(prev => {
      if (prev !== 'Error') {
        const result = calculatorLogic.percentage(parseFloat(prev))
        return calculatorLogic.formatNumber(result)
      }
      return prev
    })
  }, [])

  const handleToggleSign = useCallback(() => {
    setDisplay(prev => {
      if (prev !== 'Error' && prev !== '0') {
        const result = calculatorLogic.toggleSign(parseFloat(prev))
        return calculatorLogic.formatNumber(result)
      }
      return prev
    })
  }, [])

  const handleMemoryAdd = useCallback(() => {
    if (display !== 'Error') {
      setMemory(prev => prev + parseFloat(display))
      setNewNumber(true)
    }
  }, [display])

  const handleMemorySubtract = useCallback(() => {
    if (display !== 'Error') {
      setMemory(prev => prev - parseFloat(display))
      setNewNumber(true)
    }
  }, [display])

  const handleMemoryRecall = useCallback(() => {
    setDisplay(calculatorLogic.formatNumber(memory))
    setNewNumber(true)
  }, [memory])

  const handleMemoryClear = useCallback(() => {
    setMemory(0)
  }, [])

  return {
    display,
    expression,
    memory,
    handleNumber,
    handleDecimal,
    handleOperator,
    handleEquals,
    handleClear,
    handleClearEntry,
    handleBackspace,
    handlePercentage,
    handleToggleSign,
    handleMemoryAdd,
    handleMemorySubtract,
    handleMemoryRecall,
    handleMemoryClear
  }
}