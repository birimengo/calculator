// src/components/Display.jsx
import { memo } from 'react'

export const Display = memo(({ value, memory, expression }) => {
  return (
    <div className="border border-white/30 rounded-2xl p-6 bg-black/5">
      {/* Expression - Blue, subtle */}
      <div className="text-right text-sm text-blue-600 dark:text-blue-400 font-mono mb-1 h-5 opacity-70">
        {expression}
      </div>
      
      {/* Main Value - Bold Blue */}
      <div className="text-right">
        <div className="text-6xl font-light text-blue-600 dark:text-blue-400 font-mono tracking-tight">
          {value}
        </div>
      </div>
      
      {/* Memory Badge - Blue with white border */}
      {memory !== 0 && (
        <div className="absolute top-2 left-2 text-xs border border-white/30 rounded-full px-2 py-1 bg-black/5 text-blue-600 dark:text-blue-400 font-medium">
          M={memory}
        </div>
      )}
    </div>
  )
})

Display.displayName = 'Display'