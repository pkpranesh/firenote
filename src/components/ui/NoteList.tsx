import { db } from "@/lib/firebase"
import { collection,onSnapshot,doc,deleteDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Button } from "./button"
import { toast } from 'react-hot-toast';


interface Note{
    id:string,
    content:string,
}
const NoteList = () => {
    const [note,setNote] = useState<Note[]>([])

    useEffect(()=>{

        const unsubscribe = onSnapshot(collection(db,"notes"),(snapshot)=>{
            const notes= snapshot.docs.map(doc =>({
                id:doc.id,
                ...doc.data()
            })) as Note[];

        setNote(notes);

        })
    
    return () => unsubscribe(); 
    },[])
    console.log(note)
    
    const handleDelete = async(id:string) => {
        await deleteDoc(doc(db,"notes",id))
        toast.success("Note Deleted")
    }
    if (note.length===0){
        return <p className="text-center ">NO Notes Start Typing....</p>
    }
  return (
    <div className={`grid gap-4 mt-4 ${note.length===1?"grid-cols-1":"grid-cols-1 md:grid-cols-2"}`}>
        {note.map((note)=>(
            <div className="p-5 bg-orange-500  rounded-xl shadow-md border-orange-600 border hover:bg-orange-600 hover:shadow-lg  cursor-pointer duration-200 transition-all flex items-center justify-between">
                <p className="text-base text-gray-900 ">{note.content}</p>
                

            
                <Button onClick={()=>handleDelete(note.id)}>Delete</Button> 
              

            </div>  
 
        ))}

       </div>  
  )
}  

export default NoteList