// src/components/Calculator.jsx
import { useState, useEffect } from 'react'
import { Display } from './Display'
import { Keypad } from './Keypad'

export const Calculator = () => {
  const [display, setDisplay] = useState('0')
  const [memory, setMemory] = useState(0)
  const [operator, setOperator] = useState(null)
  const [previousValue, setPreviousValue] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [expression, setExpression] = useState('')

  // Listen for theme changes on parent document
  useEffect(() => {
    const observer = new MutationObserver(() => {
      // Force re-render when theme changes
      setDisplay(prev => prev)
    })
    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit)
    }
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const clearDisplay = () => {
    setDisplay('0')
    setOperator(null)
    setPreviousValue(null)
    setWaitingForOperand(false)
    setExpression('')
  }

  const backspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay('0')
    }
  }

  const toggleSign = () => {
    setDisplay(prev => String(-parseFloat(prev)))
  }

  const percentage = () => {
    setDisplay(prev => String(parseFloat(prev) / 100))
  }

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display)
    
    if (previousValue === null) {
      setExpression(`${inputValue} ${nextOperator}`)
      setPreviousValue(inputValue)
    } else {
      setExpression(`${previousValue} ${operator} ${inputValue} =`)
      
      const currentValue = previousValue || 0
      let newValue

      switch (operator) {
        case '+':
          newValue = currentValue + inputValue
          break
        case '-':
          newValue = currentValue - inputValue
          break
        case '×':
          newValue = currentValue * inputValue
          break
        case '÷':
          newValue = currentValue / inputValue
          break
        default:
          newValue = inputValue
      }

      setPreviousValue(newValue)
      setDisplay(String(newValue))
      setExpression(`${newValue} ${nextOperator}`)
    }

    setWaitingForOperand(true)
    setOperator(nextOperator)
  }

  const calculate = () => {
    if (operator && previousValue !== null) {
      const inputValue = parseFloat(display)
      const currentValue = previousValue || 0
      let newValue

      switch (operator) {
        case '+':
          newValue = currentValue + inputValue
          break
        case '-':
          newValue = currentValue - inputValue
          break
        case '×':
          newValue = currentValue * inputValue
          break
        case '÷':
          newValue = currentValue / inputValue
          break
        default:
          newValue = inputValue
      }

      setExpression(`${currentValue} ${operator} ${inputValue} =`)
      setDisplay(String(newValue))
      setPreviousValue(newValue)
      setOperator(null)
      setWaitingForOperand(true)
    }
  }

  const memoryAdd = () => {
    setMemory(prev => prev + parseFloat(display))
  }

  const memorySubtract = () => {
    setMemory(prev => prev - parseFloat(display))
  }

  const memoryRecall = () => {
    setDisplay(String(memory))
    setWaitingForOperand(true)
  }

  const memoryClear = () => {
    setMemory(0)
  }

  return (
    <div className="max-w-md w-full mx-auto p-4">
      <Display 
        value={display}
        memory={memory}
        expression={expression}
      />

      <div className="mt-6">
        <Keypad
          onNumber={inputDigit}
          onDecimal={inputDecimal}
          onOperator={performOperation}
          onEquals={calculate}
          onClear={clearDisplay}
          onBackspace={backspace}
          onPercentage={percentage}
          onToggleSign={toggleSign}
          onMemoryAdd={memoryAdd}
          onMemorySubtract={memorySubtract}
          onMemoryRecall={memoryRecall}
          onMemoryClear={memoryClear}
        />
      </div>
    </div>
  )
}