// src/utils/calculatorLogic.js
export const calculatorLogic = {
  // Basic operations
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => b !== 0 ? a / b : 'Error',
  
  // Format number for display
  formatNumber: (num) => {
    if (num === 'Error') return 'Error'
    const str = num.toString()
    if (str.length > 12) {
      return parseFloat(num).toExponential(6)
    }
    return str
  },
  
  // Calculate percentage
  percentage: (num) => num / 100,
  
  // Toggle sign
  toggleSign: (num) => -num,
  
  // Check if value is an operator
  isOperator: (char) => ['+', '-', '×', '÷'].includes(char),
  
  // Get operator precedence
  getPrecedence: (operator) => {
    switch(operator) {
      case '+':
      case '-':
        return 1
      case '×':
      case '÷':
        return 2
      default:
        return 0
    }
  },
  
  // Evaluate expression
  evaluate: (tokens) => {
    const outputQueue = []
    const operatorStack = []
    
    tokens.forEach(token => {
      if (!calculatorLogic.isOperator(token)) {
        outputQueue.push(parseFloat(token))
      } else {
        while (
          operatorStack.length > 0 &&
          calculatorLogic.isOperator(operatorStack[operatorStack.length - 1]) &&
          calculatorLogic.getPrecedence(operatorStack[operatorStack.length - 1]) >= 
          calculatorLogic.getPrecedence(token)
        ) {
          outputQueue.push(operatorStack.pop())
        }
        operatorStack.push(token)
      }
    })
    
    while (operatorStack.length > 0) {
      outputQueue.push(operatorStack.pop())
    }
    
    const evaluationStack = []
    outputQueue.forEach(token => {
      if (!calculatorLogic.isOperator(token)) {
        evaluationStack.push(token)
      } else {
        const b = evaluationStack.pop()
        const a = evaluationStack.pop()
        switch(token) {
          case '+':
            evaluationStack.push(a + b)
            break
          case '-':
            evaluationStack.push(a - b)
            break
          case '×':
            evaluationStack.push(a * b)
            break
          case '÷':
            evaluationStack.push(b !== 0 ? a / b : 'Error')
            break
        }
      }
    })
    
    return evaluationStack[0]
  }
}