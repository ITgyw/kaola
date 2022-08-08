import { Suspense, useState } from 'react'

import Footer from './components/Footer'
import RouterConfig from './routes'
function App() {

  return (
    <div className="App">
      <RouterConfig />
      <Footer />
    </div>
  )
}

export default App
