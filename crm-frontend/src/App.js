
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';

function App() {
  const [customers, setCustomers] = useState();

  const getMovies = async() => {
    try{
      const response = await api.get("/api/v1/customers");
      console.log(response.data);
      setCustomers(response.data);
    }catch(e){
      console.error(e);
    }
  }

  useEffect(()=>{
    getMovies();
  },[])
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
