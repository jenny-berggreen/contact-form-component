import { useState } from 'react'
import styles from './App.module.css'
import FormComponent from './FormComponent.jsx'

function App() {

  return (
    <>
      <div className={styles.main_container}>
        <FormComponent />
      </div>
      
    </>
  )
}

export default App
