const Product = (props) => {
    return ( 


<div className="card">
  <div className="card-body">
    <h2 className="card-title">{props.data.name}</h2>
    <img src="https://i0.wp.com/thesolehouse.com/wp-content/uploads/2023/10/nike-air-max-95-anthracite-yellow-orange-fz4626-001-1.jpg?fit=1140%2C800&ssl=1" alt="shoes" />
    <p className="card-text"> {props.data.price}</p>
    <p className="card-text"> {props.data.stock}</p>
    <p className="card-text"> {props.data.description}</p>
  </div>
</div>
    )
}
export default Product;