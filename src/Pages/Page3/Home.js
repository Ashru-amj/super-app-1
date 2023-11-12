import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'
import Timer from '../../Component/Timer/Timer';
import NewsPaper from '../../Component/NewsPaper/NewsPaper';
import Weather from '../../Component/Weather/Weather';
import Profile from '../../Component/Profile/Profile';
import Note from '../../Component/Note/Note';

export default function Home() {

  const navigate = useNavigate();

  const [time, setTime] = useState('')

  const toggleBrowse = ()=>{
    navigate('/super-app-1/browse');
  }

  useEffect(() => {

    const getTime = () => {
      const time = {
        date: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),

        hour: new Date().toLocaleString([], { hour: 'numeric', minute: 'numeric', hour12: true })
      }
      setTime(time)
    }
    getTime();
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.profile_3_box}>
        <div className={styles.profile_weather_box}>
          <Profile/>
          <Weather time={time}/>
        </div>
        <Note/>
        <Timer/>
      </div>
      <NewsPaper time={time} />
      <button className={styles.toggle_btn} onClick={toggleBrowse}>Browse</button>
    </div>
  )
}