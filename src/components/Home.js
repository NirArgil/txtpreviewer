import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack } from '@mui/material'

export const Home = () => {
  return (
    <div>
      <h1>Welcome to .txt previewer</h1>

      <Stack spacing={3} mt={5} direction="row" justifyContent="center">

        <Button variant="outlined" style={{ textTransform: 'none' }}>
          <Link to="/read-file" style={{ textDecoration: 'none' }}>Read File</Link>
        </Button>

        <Button variant="outlined" style={{ textTransform: 'none' }}>
          <Link to="/output" style={{ textDecoration: 'none' }}>Output</Link>
        </Button>

      </Stack>
    </div>
  )
}
