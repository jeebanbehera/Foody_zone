import Top from "./componates/Top";
import "./App.css"
import Body from "./componates/Body";
import { useEffect, useState } from "react"

const DATA = "http://localhost:9000"



const App = () => {
  let [data,setData]=useState(null);
  let [loading,setLoading]=useState(false)
  let [error,setError]=useState(false)
  let [filterData,setFilterData]=useState(null)
  let [filterType,setFilterType]=useState("all")

    

    useEffect(()=>{
      const  response = async ()=>{
        setLoading(true)

        try{
            let newData = await fetch(DATA)
            let NewData = await newData.json()
            // console.log(NewData);
            setData(NewData)
            setLoading(false)
            setFilterData(NewData)
            setFilterType(NewData)
                
            
        }
        catch(error){
            setError("unable to fetch data")
        }
        
      };
      response()
    },[])
    // response()
   
     

    if(error){ 
      <div>{error}</div>
    }
    if(loading){
      return <div><h1>Loading.....</h1></div>
    }


    // searchBtn by input
  const searchBtn = (event)=>{
    let searchValue = event.target.value;

    
    if(searchValue === ""){
      setFilterData(null)
    }
    
      let filter = data?.filter((data)=>
        // console.log(data.name)
        data.name.toLowerCase().includes(searchValue.toLowerCase())
      )
      // console.log(filter)
      setFilterData(filter)
    
  }

  // searchBtn by button
  const typeBtn = (type)=>{
    if(type === "all"){
      setFilterData(data);
      setFilterType("all");
      return
    }
    else{
      let filter = data?.filter((data)=>
        data.type.toLowerCase().includes(type.toLowerCase())
      )
      
      setFilterData(filter)
      setFilterType(type)
    }
  }
  
  
  

  return(
    <>
      <div className="container">
        <Top data={data} searchBtn={searchBtn} typeBtn={typeBtn} />
        <Body data={filterData} DATA={DATA} />
      </div>
    </>
  );
};

export default App;


