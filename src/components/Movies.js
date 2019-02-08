import React, {Fragment} from "react"
import FontAwesomeIcon from "./FontAwesomeIcon"
import StyledHeader from "../styled/StyledHeader"
import StyledHeaderTitle from '../styled/StyledHeaderTitle'
import { movies } from './staticData'
import StyledHorizontalScroll from '../styled/StyledHorizontalScroll'
import Movie from './Movie'
import StyledFooter from '../styled/StyledFooter'
import StyledLargeBtn from '../styled/StyledLargeButton'
const Movies = () => (
    <Fragment>
    <StyledHeader>
        <FontAwesomeIcon icon='bars' text='help' />
        <StyledHeaderTitle>The movie Recommended</StyledHeaderTitle>
        <FontAwesomeIcon icon='search' />
    </StyledHeader>
    <StyledHorizontalScroll>
    { movies.map(movie =>(
        <Movie
            key={movie.id}
            name={movie.name}
            poster={movie.poster}
            duration={movie.duration}
            year={movie.year}
        />
    ))}
    </StyledHorizontalScroll>
    <StyledFooter>
        <StyledLargeBtn>Recommended Movies</StyledLargeBtn>
        </StyledFooter>
        </Fragment>
)
export default Movies