import {useState} from 'react'
// import { i } from 'vite/dist/node/types.d-aGj9QkWt';
import './App.css'
import Counter from './Counter';

const App = () => { 

//   const [count, setCount] = useState(0);

//   const countPlus1 = () => {
//     setCount(count + 1)
//   }

//   const countMinus1 = () => {
//     setCount(count - 1)
//   } 
//   return ( 
// <div>
//   <h1>App</h1>
//   <button onClick={()=> console.log("click")}>click console</button>
//   <h2>Counter: {count}</h2>
//       <button onClick={() => countPlus1()}>
//         CLICK: +1
//       </button>
//       <button onClick={() => countMinus1()}>
//         CLICK: -1
//       </button>
// </div>
//   );
// const isLoading = false;
// if (isLoading){
//   return <h1>Loading...</h1>
// }else {
//   return (
//     <div>
//       <h1>App</h1>
//     </div>
//   );
// }

// const isAdmin = false;

// return(
//   <div>
//     <h1>Bonjour {isAdmin ? <i>Admin</i> : "utilisateur"}</h1>
//   </div>
// )

// const isAuthenticated = true;

// return (
//   <div>
//     <h1>Bonjour{isAuthenticated && <span>, Mehdi</span>}</h1>
//     <p>contenu</p>
//   </div>
// )

const [count, setCount] = useState(0);

const countPlus1 = () => {
  setCount(count + 1);
}

return (
  <div>
    <Counter count={count} increment={countPlus1}/>
  </div>
)

};
export default App
