import { AuthProvider } from './context/auth/AuthProvider'
import { Routes } from './routes'
import { GlobalStyles } from './styles/global'

const App = () => {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyles />
    </AuthProvider>
  )
}

export default App
