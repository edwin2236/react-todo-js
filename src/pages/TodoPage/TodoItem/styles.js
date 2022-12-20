import styled from '@emotion/styled'
import { Card, Typography } from '@mui/material'

export const StyledCard = styled(Card)`
  background-color: #21212b;
  padding: 18px;
  color: #ffffff;
  border-radius: 24px;
  margin-top: 12px;
  display: flex;
  align-items: center;
`

export const StyledTypography = styled(Typography)`
  text-decoration: ${(prop) => (prop.completed ? 'line-through' : 'inherit')};
  width: 100%;
`
