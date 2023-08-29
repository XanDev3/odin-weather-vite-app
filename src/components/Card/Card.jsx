import {SearchResult} from './Card.styles.js'


export const Card = ({name, temp, humidity, wind, weather}) => {

    return(
        <SearchResult>
            <h3>{name || 'New York'}</h3>
            <p>{temp || '74'}°F</p>
            <p>humidity: {humidity || '33'}%</p>
            <p>wind: {wind || '4'} mi/hr</p>
            <p>{weather || 'Partly Cloudy'}</p>
        </SearchResult>
    )
}