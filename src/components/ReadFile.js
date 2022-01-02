import React from 'react'
import { Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { getText } from '../redux/actions'

export const ReadFile = () => {
  const dispatch = useDispatch();

  const getTextInput = (e) => {
    dispatch(getText(e))
  }

  return (
    <div>
      <h3>Read file</h3>
      <input type="file" onChange={getTextInput} />

      <p>After you choose the txt file, move to output page.</p>
      <Stack spacing={3} mt={5} direction="row" justifyContent="center">

        <Button variant="outlined" style={{ textTransform: 'none' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>Home page</Link>
        </Button>

        <Button variant="outlined" style={{ textTransform: 'none' }}>
          <Link to="/output" style={{ textDecoration: 'none' }}>Output page</Link>
        </Button>

      </Stack>
    </div>
  )
}
