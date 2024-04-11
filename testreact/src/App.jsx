
import './App.css'
import Search from './Search';
function App() {

  
  const products = [
    {category: "Sporting Goods", price: "$49.99",  stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99",  stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: true, name: "Basketball"},
    {category: "Electronics", price: "$99.99",  stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: true, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ];

    // return (
    //     <div>
    //       <h1>shop</h1>
    //       <ul>
    //         {products.map((number, price) => {
    //           return <li key={price}>
    //             {number}
    //             </li>
    //         })}
    //       </ul>
    //     </div>
    //   )

    return (
        <div className='all'>
          <Search/>
          <h2>Our products : </h2>
          <table className="table table-hover">
          {products.map((product) => (
              <tr key={product.id}>
              <th>{product.name}</th>
              <th>{product.price}</th>
              </tr>
         ))}
         </table>
        </div> 
      )


}

export default App
