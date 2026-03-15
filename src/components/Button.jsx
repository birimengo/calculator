// src/components/Button.jsx
import { memo } from 'react'

export const Button = memo(({ 
  children, 
  onClick, 
  type = 'number',
  className = ''
}) => {
  const baseClasses = "px-4 py-3 text-base rounded-lg font-semibold transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md"
  
  // Using BizCore's theme classes with proper colors
  const typeClasses = {
    // Number buttons: standard theme colors
    number: 'bg-button-number text-primary hover:bg-button-number-hover',
    
    // Operator buttons: blue background with white text
    operator: 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700',
    
    // Function buttons: standard theme colors
    function: 'bg-button-function text-primary hover:bg-button-function-hover',
    
    // Equals button: blue background (darker shade)
    equals: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800',
    
    // Memory buttons: blue text on light purple background
    memory: 'bg-button-memory text-blue-600 dark:text-blue-400 hover:bg-button-memory-hover text-sm'
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${typeClasses[type]} ${className}`}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'