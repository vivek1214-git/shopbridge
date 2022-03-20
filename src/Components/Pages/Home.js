import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
const Home = () => {
    const [shopbridge, setShopBridge] = useState([]);

    useEffect(()=>{
        shopbridgeload();
    },[])

const shopbridgeload = async () => {
    const result =  await axios.get("http://localhost:3002/shopbridge");
    setShopBridge(result.data) ;
}
const delectData = async id =>{
await axios.delete(`http://localhost:3002/shopbridge/${id}`);
shopbridgeload();
}
  return (
    <div className="container">
      <div className="py-5">
        <h1> Home page</h1>

        <table className="table table-success table-striped">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">description</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   {
       shopbridge.map((shopbridge, index)=>(
           <tr>
               <th scope="row">{index + 1}</th>
               <td>{shopbridge.name}</td>
               <td>{shopbridge.price}
               </td>
               <td>{shopbridge.description}</td>
               <td> 
               <Link className="btn btn-light mx-2" to={`/view/${shopbridge.id}`}>view</Link>
               <Link className="btn btn-primary mx-2" to={`/shopbridges/edit/${shopbridge.id}`}>Update</Link>
               <Link className="btn btn-danger mx-2" onClick={()=> delectData(shopbridge.id)}>Delete</Link>
               </td>
           </tr>
       )

       )
   }
  </tbody>
</table>
      </div>
    </div>
  );
};

export default Home;
