import Product from "./product";

const App = () => {
  const product = {
    name: "nike",
    price: "180 €",
    description: "loretrlmgkrtkhjnrthonjrohjnryohnryohnryhj",
    stock: 50+" pcs",
  };

  return (
    <div>
      <Product data = {product} />
    </div>
  );
};

export default App;