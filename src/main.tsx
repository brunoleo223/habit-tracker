import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 1. cadastrar novo hábito
// 1.1 nome do hábito
// 1.2 descrição do hábito
// 1.3 dias da semana do hábito
// 1.4 horário do hábito
// 1.5 cor do hábito

// 2. ver lista de hábitos

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
