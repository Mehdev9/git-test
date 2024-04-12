import Axios from "axios";
import { useEffect, useState } from "react";

const TestAxios = () => {


  // const [product, setProduct] = useState();

  // useEffect(() => {
  //   Axios.get("https://fakestoreapi.com/products/1")
  //   .then((response) => {
  //     setProduct(response.data.value);
  // })

  // }, []);

  // if(product === undefined) {
  //   return(
  //     <div>
  //       <p>loading...</p>
  //     </div>
  //   )
  // }

  const createUser = () => {
    const userToCreate = {
      name: "toto",
  };

  Axios.post("https://jsonplaceholder.typicode.com/users", userToCreate)
  .then((response) => {
    console.log(response);
  });


    return (
    
      <div>
        <h1>FAKE formulaire</h1>
        <button onClick={() => createUser()}>valider</button>
        
      </div>
    );
  };
}

export default TestAxios;