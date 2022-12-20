import styled from '@emotion/styled'
import { Paper } from '@mui/material'

export const StyledPaper = styled(Paper)`
  margin: 40px 0 20px 0;
  background-color: inherit;
  border: 3px solid #21212b;
  border-radius: 20px;
  & button {
    color: #fc76a1;
  }
  & button svg {
    font-size: 34px;
  }
  & input {
    color: #ffffff;
  }
`
