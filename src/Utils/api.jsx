import axios from "axios";

const baseUrl = 'https://youtube138.p.rapidapi.com'

const options = {
  
  
    params: {hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key':  'd348897767msh198b5c18685015ep1ffb7fjsn6e6bf3c384ec',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
    },
  };
 
  

  export const fetchApi = async(url) =>{
    

       const res = await fetch(`${baseUrl}/${url}`, options)
       const data = await res.json()
        //  console.log(data.contents)
       return(data)
          

  }     
        // const {data }= await axios.get(`${baseUrl}/${url}`, options)
        
        // return data;
         
              
      


