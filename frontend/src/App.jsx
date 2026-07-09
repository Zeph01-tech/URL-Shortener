import { useRef, useState } from 'react'
import './App.css'

function App() {
  const inputRef = useRef(null)
  const [placeholder, setPlaceholder] = useState('Enter URL')
  const [textColor, setTextColor] = useState('white')

  
   async function handleSubmit(e){
    e.preventDefault()
    const response = await fetch('http://localhost:3000/shortenUrl', { method: 'POST', body: JSON.stringify({ url: inputRef.current.value})  })  
    if(!response.ok) {
        setPlaceholder('Empty URL')
        setTextColor('red')
    } else {
        setPlaceholder('Enter URL')
        setTextColor('white')
    }
    
  }
   


  return <>
    <div className="container ">
     <div className="flex flex-col  items-center my-5  h-screen">
      <h3 className='my-4'>URL Shortener</h3>
      <form onSubmit={handleSubmit} className='flex flex-wrap items-end gap-2'>
        <div className="flex flex-col">
          <label htmlFor="url">Enter URL</label>
<input ref ={inputRef} className={`w-full bg-transparent placeholder:text-${textColor} text-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`} placeholder= {`${placeholder}` }/> 
       </div>
        <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-2 rounded transition duration-150 ease-in-out">
          Shorten
        </button>
      </form>

     </div>
    </div>
  </>
}

export default App
