import React, {useState, useEffect} from 'react'
import HomePage from './Pages/HomePage/HomePage';

function App() {
  const [students, setStudents] = useState([])
  const [lecturers, setLecturers] = useState([])
  const [validData, setValidData] = useState(false)

  useEffect(()=>{
    if(!validData){
      fetch('https://61b9fd7e48df2f0017e5a83d.mockapi.io/students')
      .then(res=>res.json())
      .then(data=>{ setStudents(data)
        setValidData(true)
      })
  
      fetch('https://61b9fd7e48df2f0017e5a83d.mockapi.io/lecturers')
      .then(res=>res.json())
      .then(data=>{setLecturers(data)
      setValidData(true)})
    }
    
  }, [validData])

  return ( 
    <div>
      <HomePage students={students} setStudents={setStudents} setValidData={setValidData} lecturers={lecturers}/>
    </div>
   );
}

export default App;