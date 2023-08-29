import { useState, useEffect} from 'react'
import StyledButton, { FancyButton } from '../Button/Button.jsx'
import { StyledBodyDiv, StyledBodyInput, StyledErrorDiv } from './Body.styles.js'
import { Card } from '../Card/Card.jsx'
import {isNumeric, removeWhiteSpace} from '../HelperFns.js'


export function Body(){
  const [data, setData] = useState([])
  const [location, setLocation] = useState('Boston')
  const [query, setQuery] = useState('')
  const [url, setUrl] = useState(`${import.meta.env.VITE_APP_API_URL}/weather?q=NewYorkCity&appid=${import.meta.env.VITE_APP_API_KEY}&units=imperial`)
  const [error, setError] = useState(null);
  const [name,setName]=useState('');
  const [temp,setTemp]=useState('');
  const [wind,setWind]=useState('');
  const [weather, setWeather] = useState('')
  const [humidity,sethumidity]=useState('');
  
  useEffect(() => {
    setLocation(removeWhiteSpace(query))
  },[query])
  useEffect(() => {
    updateUrl(location)
  },[location])
  
/*   useEffect(() => {
    //run fetch request
  },[url]) */

  function updateUrl(location){
      if(isNumeric(location)){
          const fetchUrl = `${import.meta.env.VITE_APP_API_URL}/weather?zip=${location}&appid=${import.meta.env.VITE_APP_API_KEY}&units=imperial`;
          setUrl(fetchUrl)
      }
      else {
          const fetchUrl = `${import.meta.env.VITE_APP_API_URL}/weather?q=${location}&appid=${import.meta.env.VITE_APP_API_KEY}&units=imperial`;
          setUrl(fetchUrl)
      }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    searchForWeather(url)
  }

  async function searchForWeather(url){
    try{
        const weatherJson = await (await fetch(url)).json()
        console.dir(weatherJson)
        setData(weatherJson)
        setName(weatherJson.name)
        setTemp(Math.round(weatherJson.main.temp))
        setWind(weatherJson.wind.speed)
        setWeather(weatherJson.weather[0].description)
        sethumidity(weatherJson.main.humidity)
        setError(null)
    }catch (err) {
        setError(err)
        console.log(err.message)
    }
}
  return (
    <>
    <StyledBodyDiv>
      <form method='GET' onSubmit={handleSubmit}>
        <StyledBodyInput
          className='location'
          type='text'
          placeholder='Location - City or Zip Code'
          required
          $inputColor='grey'
          value={query}
          onChange={(e)=>{
            setQuery(e.target.value)
        }}
        />
        <FancyButton
          type='submit'
        >
          Search
        </FancyButton>
      </form>
      <br />
    </StyledBodyDiv>
    <Card
        name={name}
        temp={temp}
        wind={wind}
        humidity={humidity}
        weather={weather}
    ></Card>
        {error !== null && 
            <StyledErrorDiv className="error">
                <p>A network error has occurred!</p>
            </StyledErrorDiv>
        }
    </>
  )
}
