// src/components/Keypad.jsx
import { memo } from 'react'
import { Button } from './Button'
import { 
  Plus, 
  Minus, 
  X, 
  Divide, 
  Equal, 
  Percent, 
  RotateCcw, 
  Delete,  // Changed from Backspace to Delete
  PlusCircle, 
  MinusCircle, 
  RotateCw,
  Trash2
} from 'lucide-react'

export const Keypad = memo(({
  onNumber,
  onDecimal,
  onOperator,
  onEquals,
  onClear,
  onClearEntry,
  onBackspace,
  onPercentage,
  onToggleSign,
  onMemoryAdd,
  onMemorySubtract,
  onMemoryRecall,
  onMemoryClear
}) => {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

  return (
    <div className="grid grid-cols-5 gap-2">
      {/* First Row - Memory Functions */}
      <Button type="memory" onClick={onMemoryAdd} size="small">
        <PlusCircle className="w-4 h-4" />
      </Button>
      <Button type="memory" onClick={onMemorySubtract} size="small">
        <MinusCircle className="w-4 h-4" />
      </Button>
      <Button type="memory" onClick={onMemoryRecall} size="small">
        <RotateCw className="w-4 h-4" />
      </Button>
      <Button type="memory" onClick={onMemoryClear} size="small">
        <Trash2 className="w-4 h-4" />
      </Button>
      <Button type="function" onClick={onClearEntry} size="small">
        CE
      </Button>

      {/* Second Row - Functions */}
      <Button type="function" onClick={onToggleSign} size="small">±</Button>
      <Button type="function" onClick={onPercentage} size="small">
        <Percent className="w-4 h-4" />
      </Button>
      <Button type="function" onClick={onClear} size="small">
        <RotateCcw className="w-4 h-4" />
      </Button>
      <Button type="function" onClick={onBackspace} size="small">
        <Delete className="w-4 h-4" />  {/* Using Delete instead of Backspace */}
      </Button>
      <Button type="operator" onClick={() => onOperator('÷')} size="small">
        <Divide className="w-4 h-4" />
      </Button>

      {/* Third Row */}
      {numbers.slice(0, 3).map(num => (
        <Button key={num} onClick={() => onNumber(num.toString())}>
          {num}
        </Button>
      ))}
      <Button type="operator" onClick={() => onOperator('×')}>
        <X className="w-4 h-4" />
      </Button>

      {/* Fourth Row */}
      {numbers.slice(3, 6).map(num => (
        <Button key={num} onClick={() => onNumber(num.toString())}>
          {num}
        </Button>
      ))}
      <Button type="operator" onClick={() => onOperator('-')}>
        <Minus className="w-4 h-4" />
      </Button>

      {/* Fifth Row */}
      {numbers.slice(6, 9).map(num => (
        <Button key={num} onClick={() => onNumber(num.toString())}>
          {num}
        </Button>
      ))}
      <Button type="operator" onClick={() => onOperator('+')}>
        <Plus className="w-4 h-4" />
      </Button>

      {/* Bottom Row */}
      <Button type="number" onClick={onDecimal} className="col-span-2">.</Button>
      <Button type="number" onClick={() => onNumber('0')} className="col-span-2">0</Button>
      <Button type="equals" onClick={onEquals} className="col-span-1">
        <Equal className="w-5 h-5" />
      </Button>
    </div>
  )
})

Keypad.displayName = 'Keypad'