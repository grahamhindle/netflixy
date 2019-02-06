import { combineReducers } from 'redux'
import movies from './movies'
import selectedMovie from './selectedMovie'


export default combineReducers({
    movies,
    selectedMovie
})