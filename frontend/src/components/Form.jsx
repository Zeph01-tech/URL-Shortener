import React from 'react'

export default function Form({ handleSubmit, inputRef, textColor, placeholder }) {
  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-start'>
			<label htmlFor="url">Enter URL</label>
			<div className='flex gap-2 justify-center items-center'>
				<input ref ={inputRef} className={`w-full bg-transparent ${textColor} text-red-50 text-xs border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`} placeholder={`${placeholder}`}/> 
				<button className="bg-blue-600 hover:bg-blue-800 text-white font-medium py-1 px-2 rounded transition duration-120 ease-in-out">
					Shrink
				</button>
			</div>
    </form>
  )
}
