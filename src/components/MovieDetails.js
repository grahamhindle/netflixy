import React from "react"
import StyledHeaderLink from '../styled/StyledHeaderLink'

import StyledHeader from "../styled/StyledHeader"
import FontAwesomeIcon from "./FontAwesomeIcon"
const MovieDetails = () => {
  return (
    <StyledHeader>
        <StyledHeaderLink href='/'>
            <FontAwesomeIcon icon="chevron-left" text="Go back" />
        </StyledHeaderLink>
    </StyledHeader>
    ) 
}
export default MovieDetails
