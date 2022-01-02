import { Button, Stack } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export const Output = () => {
  const text = useSelector((state) => ({ ...state }));

  return (
    <div>
      <h3>Output Page</h3>

      <div>
        {text.textContent}
      </div>

      <Stack spacing={3} mt={5} direction="row" justifyContent="center">

        <Button variant="outlined" style={{ textTransform: 'none' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>Home page</Link>
        </Button>

        <Button variant="outlined" style={{ textTransform: 'none' }}>
          <Link to="/read-file" style={{ textDecoration: 'none' }}>Read file page</Link>
        </Button>

      </Stack>
    </div>
  )
}
