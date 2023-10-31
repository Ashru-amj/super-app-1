import React, {useState, useEffect} from 'react'
import styles from './Note.module.css'

const Note = () => {

    const [note, setNote] = useState('')

    const handleChange = (event)=>{

        let noteData = event.target.value;
        setNote(noteData)
    }

    useEffect(() => {
        const savedNote = JSON.parse(localStorage.getItem('rect-noteData'));
        if (savedNote) {
            setNote(savedNote);
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('rect-noteData', JSON.stringify(note))

    }, [note])

    useEffect(() => {
        const savedNote = JSON.parse(localStorage.getItem('rect-noteData'));
        if (savedNote) {
            setNote(savedNote);
        }
    }, [])

  return (
     <div className={styles.container}>
        <h1>All notes</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, 
        molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ipsa.</p>
        <textarea value={note} onChange={handleChange} />
        <div className={styles.button}><button><i className="bi bi-pencil"></i></button></div>
    </div>
  )
}

export default Note
