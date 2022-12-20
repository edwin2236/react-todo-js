import { StyledEngineProvider } from '@mui/material'
import App from './App'

export default function Root() {
  return (
    <StyledEngineProvider>
      <App />
    </StyledEngineProvider>
  )
}
