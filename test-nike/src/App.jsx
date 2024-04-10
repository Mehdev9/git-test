// import Product from "./product";
import { useState } from "react";

const App = () => {
  // const product = {
  //   name: "nike",
  //   price: "180 €",
  //   description: "loretrlmgkrtkhjnrthonjrohjnryohnryohnryhj",
  //   stock: 50+" pcs",
  // };

  // return (
  //   <div>
  //     <Product data = {product} />
  //   </div>
  // );

  const [count] = useState(0);

  return (
    <div>
      <p>Counter: {count}</p>
    </div>
  );
};

export default App;