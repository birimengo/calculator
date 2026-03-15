// src/components/Keypad.jsx
import { memo } from 'react'
import { Button } from './Button'

export const Keypad = memo(({
  onNumber,
  onDecimal,
  onOperator,
  onEquals,
  onClear,
  onBackspace,
  onPercentage,
  onToggleSign,
  onMemoryAdd,
  onMemorySubtract,
  onMemoryRecall,
  onMemoryClear
}) => {
  return (
    <div className="space-y-2">
      {/* Memory Row */}
      <div className="grid grid-cols-4 gap-2">
        <Button type="memory" onClick={onMemoryAdd} className="text-xs">M+</Button>
        <Button type="memory" onClick={onMemorySubtract} className="text-xs">M-</Button>
        <Button type="memory" onClick={onMemoryRecall} className="text-xs">MR</Button>
        <Button type="memory" onClick={onMemoryClear} className="text-xs">MC</Button>
      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-4 gap-2">
        <Button type="function" onClick={onClear}>C</Button>
        <Button type="function" onClick={onToggleSign}>±</Button>
        <Button type="function" onClick={onPercentage}>%</Button>
        <Button type="operator" onClick={() => onOperator('÷')}>÷</Button>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-4 gap-2">
        <Button type="number" onClick={() => onNumber('7')}>7</Button>
        <Button type="number" onClick={() => onNumber('8')}>8</Button>
        <Button type="number" onClick={() => onNumber('9')}>9</Button>
        <Button type="operator" onClick={() => onOperator('×')}>×</Button>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-4 gap-2">
        <Button type="number" onClick={() => onNumber('4')}>4</Button>
        <Button type="number" onClick={() => onNumber('5')}>5</Button>
        <Button type="number" onClick={() => onNumber('6')}>6</Button>
        <Button type="operator" onClick={() => onOperator('-')}>-</Button>
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-4 gap-2">
        <Button type="number" onClick={() => onNumber('1')}>1</Button>
        <Button type="number" onClick={() => onNumber('2')}>2</Button>
        <Button type="number" onClick={() => onNumber('3')}>3</Button>
        <Button type="operator" onClick={() => onOperator('+')}>+</Button>
      </div>

      {/* Row 5 */}
      <div className="grid grid-cols-4 gap-2">
        <Button type="number" onClick={() => onNumber('0')} className="col-span-2">0</Button>
        <Button type="number" onClick={onDecimal}>.</Button>
        <Button type="function" onClick={onBackspace}>⌫</Button>
        <Button type="equals" onClick={onEquals}>=</Button>
      </div>
    </div>
  )
})

Keypad.displayName = 'Keypad'