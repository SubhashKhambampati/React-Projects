import React  ,{useEffect,useState} from 'react'

function NotesListPages() {
    // eslint-disable-next-line
    let [notes , setNotes] = useState([])

    useEffect(()=>{

        getNotes()

    },[])
    let getNotes = async ()=>{

        let response = await fetch('http://127.0.0.1:8000/api/note')
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
        let data = await response.json()
        console.log('Data : ',data)
        setNotes(data)

    }


  return (
    <div>

        notes
      
    </div>
  )
}

export default NotesListPages
