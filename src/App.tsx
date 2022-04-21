import React from 'react'
import Router from './router'

import { Provider } from './store'

const App: React.FC = () => {
  return (
    <Provider>
      <Router />
    </Provider>
  )
}

export default App
