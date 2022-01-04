import styled from "styled-components"

export const StyledButton = styled.button`
  background-color: ${(({variant, theme}) => {
    return theme.colors[variant]
  })};
  padding: 8px 20px;
`