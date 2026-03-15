// src/components/Display.jsx - Minimalist Version
import { memo } from 'react'

export const Display = memo(({ value, memory, expression }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      {/* Expression - Subtle */}
      <div className="text-right text-sm text-gray-400 dark:text-gray-500 font-mono mb-1 h-5">
        {expression}
      </div>
      
      {/* Main Value - Bold */}
      <div className="text-right">
        <div className="text-6xl font-light text-gray-900 dark:text-white font-mono tracking-tight">
          {value}
        </div>
      </div>
      
      {/* Memory Badge - Minimal */}
      {memory !== 0 && (
        <div className="absolute top-2 left-2 text-xs text-blue-500 dark:text-blue-400 font-medium">
          M={memory}
        </div>
      )}
    </div>
  )
})

Display.displayName = 'Display'