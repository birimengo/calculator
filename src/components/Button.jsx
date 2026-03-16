// src/components/Button.jsx
import { memo } from 'react'

export const Button = memo(({ 
  children, 
  onClick, 
  type = 'number',
  className = ''
}) => {
  const baseClasses = "px-4 py-3 text-base rounded-lg font-semibold transition-all duration-200 active:scale-95 shadow-sm border border-white/30 hover:border-white/60"
  
  // All buttons have blue text with white border
  const typeClasses = {
    // Number buttons: blue text, subtle background
    number: 'bg-black/5 text-blue-600 dark:text-blue-400 hover:bg-black/10',
    
    // Operator buttons: blue text, slightly darker background
    operator: 'bg-black/10 text-blue-600 dark:text-blue-400 hover:bg-black/20',
    
    // Function buttons: blue text, subtle background
    function: 'bg-black/5 text-blue-600 dark:text-blue-400 hover:bg-black/10',
    
    // Equals button: blue text, slightly darker
    equals: 'bg-black/10 text-blue-600 dark:text-blue-400 hover:bg-black/20',
    
    // Memory buttons: blue text, subtle background
    memory: 'bg-black/5 text-blue-600 dark:text-blue-400 hover:bg-black/10 text-sm'
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