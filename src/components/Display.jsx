// src/components/Display.jsx
import { memo, useState, useEffect } from 'react'
import { Calculator, Clock, Zap } from 'lucide-react'

export const Display = memo(({ 
  value, 
  expression, 
  memory 
}) => {
  const [time, setTime] = useState(new Date())
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-card rounded-xl p-6 shadow-inner border border-custom">
      
      {/* Calculator Header */}
      <div className="flex justify-between items-center mb-4 text-sm text-secondary">
        <div className="flex items-center gap-2">
          <Calculator className="w-4 h-4" />
          <span>Standard</span>
        </div>
        <div className="flex items-center gap-4">
          {memory !== 0 && (
            <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400">
              <span className="text-xs">M</span>
              <span>{memory}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{time.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

      {/* Expression Display */}
      {expression.length > 0 && (
        <div className="text-right text-sm text-secondary mb-2 font-mono">
          {expression.join(' ')}
        </div>
      )}

      {/* Main Display */}
      <div className="text-right">
        <div className="text-5xl font-bold text-primary font-mono truncate">
          {value}
        </div>
      </div>

      {/* Binary Representation */}
      <div className="flex justify-end mt-2">
        <div className="flex items-center gap-1 text-xs text-secondary opacity-60">
          <Zap className="w-3 h-3" />
          <span className="font-mono">
            {value !== 'Error' ? parseInt(value).toString(2).slice(0, 16) : 'ERROR'}
          </span>
        </div>
      </div>
    </div>
  )
})

Display.displayName = 'Display'