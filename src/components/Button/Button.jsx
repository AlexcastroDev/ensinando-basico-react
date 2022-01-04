import React from "react"
import { Loading } from "../Loading/Loading"
import { StyledButton } from "./Button.styles"

export const Button = ({ 
    children, 
    loading = false,
    ...rest }) => {

    return (
        <StyledButton {...rest}>
            { loading ? (<Loading />) : children }
        </StyledButton>
    )
}