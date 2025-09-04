import React, { useState } from 'react'
import { Input } from './input'
import { Button } from './button'
import { db } from '@/lib/firebase'
import { collection,addDoc,serverTimestamp } from 'firebase/firestore'
import toast from 'react-hot-toast'

const NoteText = () => {
    const [note,setNote] = useState("");
    const [loading,setLoading] = useState(false);
    const handleSubmit = async() => {
        if (!note.trim()) {
            toast.error("ADD Note....")
            return;
        }
        setLoading(true);
        await addDoc(collection(db,"notes"),{
            content:note,
            createdAt:serverTimestamp(),
        })
        setLoading(false);
        setNote("");
        toast.success("Note Added")
    }
  return (
    <div className='space-y-2'>
        <Input
        placeholder='Typee...'
        value={note}
        onChange={(e)=>setNote(e.target.value)}
        maxLength={50}
        className='bg-gray-900 border-orange-900 shadow-sm text-white'/>
        <p className=' flex text-xs text-gray-600'>{note.length}/50</p>
        <Button className='w-full mt-5'
        onClick={handleSubmit}
        disabled={loading}>{ loading ? "Saving.....": "Save Note"}</Button>
    </div>
  )
}

export default NoteText