import React from 'react'
import Container from './containers/Container'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Cairo', 'sans-serif'].join(','),
  },
})
export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    </div>
  )
}
