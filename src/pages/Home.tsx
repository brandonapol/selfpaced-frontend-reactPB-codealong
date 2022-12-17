import React from 'react'
import Background from '../assets/mountains.jpg'

export default function Home() {
  return (
    <div style={{ backgroundImage: `url(${ Background })`}} className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
        <div className="flex place-items-center h-screen">
            <h3>Welcome to the Phonebook</h3>
        </div>
    </div>
  )
}
