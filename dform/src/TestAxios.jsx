import Axios from "axios";
import { useEffect, useState } from "react";

const TestAxios = () => {


  const [product, setProduct] = useState();

  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products/1")
    .then((response) => {
      setProduct(response.data.value);
  })

  }, []);

  if(product === undefined) {
    return(
      <div>
        <p>loading...</p>
      </div>
    )
  }


    return (
    
      <div>
        <h1>{product.title}</h1>
        
      </div>
    );
  };

export default TestAxios;