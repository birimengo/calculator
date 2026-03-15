// src/components/Button.jsx
import { memo } from 'react'

export const Button = memo(({ 
  children, 
  onClick, 
  type = 'number',
  size = 'normal',
  className = ''
}) => {
  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    normal: 'px-4 py-3 text-base',
    large: 'px-6 py-4 text-lg'
  }

  const typeClasses = {
    number: 'bg-button-number text-primary',
    operator: 'bg-button-operator text-white',
    function: 'bg-button-function text-primary',
    equals: 'bg-button-equals text-white col-span-2',
    memory: 'bg-button-memory text-white text-sm'
  }

  return (
    <button
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        ${typeClasses[type]}
        rounded-lg font-semibold transition-all duration-200 
        active:scale-95 shadow-sm hover:shadow-md
        ${className}
      `}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'