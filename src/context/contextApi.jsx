import { createContext, useContext, useEffect, useState } from "react";
import { fetchApi } from "../Utils/api";



export const Context = createContext();

const ContextApi = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  
    useEffect(() => {
        fetchSelectedCategory(selectCategories);
    }, [selectCategories])

    
    const fetchSelectedCategory = (query) => {
      setLoading(true);
      fetchApi(`search/?q=${query}`).then(({ contents }) => {
          // console.log(contents);
          setSearchResults(contents);
         
        
          setLoading(false);
      });
  };
    

  return <Context.Provider value={{loading, setLoading, searchResults, setSearchResults, selectCategories, setSelectCategories, mobileMenu, setMobileMenu}}>{children}</Context.Provider>;
};

// custom hook

 const useGlobalContext = () =>{
       useContext(Context);
}

export default ContextApi;
export {useGlobalContext}