import React from 'react'
import ReactDOM from 'react-dom/client'

// import HooksApp from './HooksApp'
// import { CounterApp } from './01-UseState/CounterApp'
// import { CounterWithCustomHook } from './01-UseState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>
)