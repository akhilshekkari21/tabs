import './App.css';
import React,{useState,useEffect} from 'react';
import Companies from './components/Companies';
// declare URL
const url = 'https://course-api.com/react-tabs-project';



/* If  you want to extract different companies, create a set first. */
/*Fetch the data first and always use setloading state wile fetching data*/

function App() {

const [loading,setLoading] = useState(true);
const [data,setData] = useState([]);
const [companies,setCompanies] = useState(0)
// FETCHING DATA and separating all companies
const fetchData = async () => {
        setLoading(true)
        const response = await fetch(url);
        const newdata = await response.json();
         setData(newdata);
        setLoading(false)
       // const allCompanies = new Set(data.map((datas) => datas.company))
       // setCompanies(allCompanies);
       
       
};
// write filter fucntion in app.js only
/*const filterItems = (data) => {
const newItems = data.filter((value) => value.company === company)
setData(newItems);
}*/

useEffect(() =>{
  fetchData()
},[])
//use conditional rendering for fettching Data
if(loading)
{
  return <h1>Loading...</h1>
}

const {company,dates,duties,title} = data[companies];


  return (
    <div className="App">
      <h2>Experience</h2>
      {data.map((item,index) => {
  return <button key={item.id} onClick = {() => setCompanies(index)}>{item.company}</button>
})}
      <h3>{title}</h3>
      <h4>{dates}</h4>
      <h4>{company}</h4>
     
        {duties.map((duty,index) => {
      return(
          <p>{duty} </p>
      )

      })}
    </div>
  );
}

export default App;
