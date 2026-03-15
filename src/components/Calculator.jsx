// src/components/Calculator.jsx
import { useState } from 'react'
import { useCalculator } from '../hooks/useCalculator'
import { Display } from './Display'
import { Keypad } from './Keypad'
import { Sun, Moon, Cloud } from 'lucide-react'

export const Calculator = () => {
  const calculator = useCalculator()
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'light') return 'dark'
      if (prev === 'dark') return 'ocean'
      return 'light'
    })
    // Update body class for theme
    document.body.className = `theme-${theme === 'light' ? 'dark' : theme === 'dark' ? 'ocean' : 'light'}`
  }

  // Set initial theme
  useState(() => {
    document.body.className = 'theme-light'
  }, [])

  const themeIcons = {
    light: <Sun className="w-5 h-5 text-yellow-500" />,
    dark: <Moon className="w-5 h-5 text-blue-400" />,
    ocean: <Cloud className="w-5 h-5 text-cyan-400" />
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-4 transition-colors duration-300">
      <div className="max-w-md w-full bg-card rounded-2xl shadow-2xl p-6 border border-custom">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-primary">Calculator</h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-card border border-custom hover:opacity-80 transition-opacity"
          >
            {themeIcons[theme]}
          </button>
        </div>

        {/* Display */}
        <Display 
          value={calculator.display}
          expression={calculator.expression}
          memory={calculator.memory}
        />

        {/* Keypad */}
        <div className="mt-6">
          <Keypad
            onNumber={calculator.handleNumber}
            onDecimal={calculator.handleDecimal}
            onOperator={calculator.handleOperator}
            onEquals={calculator.handleEquals}
            onClear={calculator.handleClear}
            onClearEntry={calculator.handleClearEntry}
            onBackspace={calculator.handleBackspace}
            onPercentage={calculator.handlePercentage}
            onToggleSign={calculator.handleToggleSign}
            onMemoryAdd={calculator.handleMemoryAdd}
            onMemorySubtract={calculator.handleMemorySubtract}
            onMemoryRecall={calculator.handleMemoryRecall}
            onMemoryClear={calculator.handleMemoryClear}
          />
        </div>

        {/* Footer */}
        <div className="mt-4 text-xs text-center text-secondary">
          <p>Standalone Calculator App | Memory: {calculator.memory}</p>
        </div>
      </div>
    </div>
  )
}