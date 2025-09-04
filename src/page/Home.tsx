import NoteList from '@/components/ui/NoteList'
import NoteText from '@/components/ui/NoteText'
import React from 'react'

const Home = () => {
  return (
    <div className='flex items-center justify-center px-4 py-8 bg-orange-400 max-w-screen-sm mx-auto w-full shadow-lg rounded-lg '>
        <div className='w-full'>
            <h1 className='text-2xl font-bold text-center mb-6'>FireNote</h1>
            <div className='mb-6 shadow-lg bg-orange-500 p-6 rounded-lg' ><NoteText/></div>
            <NoteList/>
        </div>
        </div>
  )
}

export default Home