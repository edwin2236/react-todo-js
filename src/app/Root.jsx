import { StyledEngineProvider } from '@mui/material'
import App from 'app/ui/App'

export default function Root() {
  return (
    <StyledEngineProvider>
      <App />
    </StyledEngineProvider>
  )
}
