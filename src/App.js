import React ,{useState, useEffect} from 'react';
import axios from "axios";
import './App.css'


function App() {
   
    const url = "https://jsonplaceholder.typicode.com/photos";
  
    const [image,setImages] = useState([]);
    const [show,setShow] = useState("");
    
    useEffect (() => {
      axios.get(url)
      .then((res) => {
        let cutOut = res.data;
        let disPlayer = cutOut.slice(0,36);
        setImages(disPlayer)
      })
    }, []);

    function displayImage(img) {
            setShow(img);
    };
      return (
        <div className="container">
          <div className ="leftAlign">
          {
          image.map((img) => 
          {
            return <img src={img.thumbnailUrl} alt ={img.title} onClick= {() => displayImage(img.url)} key ={img.id} />
          })}
          </div>
          
          <div className ="rightAlign">
           {
            <img src ={show} alt = "Here clicked images will be displayed"/>
           }
          </div>
          
        </div>)}

    //  const UserList = () =>{
    //    const [user, setUser] = useState([]);
    //    useEffect (() => {
    //      const getUser = async () =>{
    //           const response = await fetch(url);
    //           const user = await response.json();
    //           setUser (user);
    //      }
    //      getUser();
    //    }, [])
    //    if(user.length < 1) return null ;
    //    return (
    //      <ul>
    //        {user.map((user) => {
    //          <li key = {user.id}>{user.name}</li>
    //        })}
    //      </ul>
    //    )}
  export default App;