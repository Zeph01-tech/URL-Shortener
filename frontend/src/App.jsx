import { useRef, useState, useEffect } from 'react'
import Data from './components/Data';
import Form from './components/Form'
import './App.css'

const PlaceholderStyles = {
  NORMAL: "placeholder:text-grey-200",
  ERROR: "placeholder:text-red-800",
};

function App() {
  const inputRef = useRef(null)
  const [placeholder, setPlaceholder] = useState('URL')
  const [textColor, setTextColor] = useState(PlaceholderStyles.NORMAL)
  const [urlList, setUrlList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

   async function fetchData() {
      setLoading(true)
      setError(false)
      const response = await fetch('http://localhost:3000', { method: 'GET' })
      setLoading(false)
      if(response.ok) {
        const data = await response.json()
        console.log(data)
        if(data.length === 0)
          setError(true)
        else
          setUrlList(data)
        
      } else
        setError(true)
    }

  useEffect(() => {

    fetchData()
  }, [])

  
  async function handleSubmit(e){
  e.preventDefault()
  const response = await fetch('http://localhost:3000/shortenUrl', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url: inputRef.current.value}) 
  })  
  if(!response.ok) {
      setPlaceholder('Cannot shrink empty URL.')
      setTextColor(PlaceholderStyles.ERROR)
  } else {
      setPlaceholder('URL')
      setTextColor(PlaceholderStyles.NORMAL)
      fetchData()
  }
  inputRef.current.value=""
}
   
  return <>
    <div className="container">
      <div className="flex flex-col items-center my-5">
        <h3 className='my-4'>URL Shortener</h3>
        <Form handleSubmit={handleSubmit} textColor={textColor} placeholder={placeholder} inputRef={inputRef}/>
     </div>
     <Data loading={loading} urlList={urlList} error={error}/>
    </div>
  </>
}

export default App
