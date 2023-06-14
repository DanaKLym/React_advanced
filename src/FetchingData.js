import { useState, useEffect } from "react";

const FetchingData = () => {
    const [user, setUser] = useState([]);

//ORIGINAL APPROACH

const fetchData = () => {
    fetch('https://randomuser.me/api/?results=1').then((response) => response.json()).then((data) => {setUser(data);});
        };

    /* Approach with extracted function
    
    const handleResponse = (data) => {
         setUser(data);
         console.log(data);
     }
 
     SIDE NOTE: The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
 
     const fetchData = () => {
         console.log((response) => response.json());
         fetch('https://randomuser.me/api/?results=1').then((response) => response.json()).then(handleResponse);
         };
    */ 


    /*
    CODE IF USING AJAX (need to install axios and import it first)
     const handleResponse = (response) => {
        setUser(response);
        console.log(response);
    }

    const fetchData = () => {
        axios.get('https://randomuser.me/api/?results=1').then(handleResponse);
    };
    */ 
   
        useEffect(() => {
            fetchData();
        }, []);


        //Object.keys is to check if any array exist while fetching the data;
    return  Object.keys(user).length > 0 ? (
        <div style={{padding: "40px"}}>
          <h1>Customer data</h1>
        <h2>Name: {user.results[0].name.first}</h2>
        <img src={user.results[0].picture.large} alt=""/>
        </div>
      ) : (
        <h1>Data pending...</h1>
    );
};

export default FetchingData;