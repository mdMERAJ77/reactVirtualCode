import './Card.css'

function Card({name="...",price="0cr",imageUrl="image"}) { //pors: {name="...",price="0cr",imageUrl="image"}
  return (
    <div className='card'>
        <img src={imageUrl} alt="" width={300} height={200}/>
        <h1>Name: {name}</h1>
        <h3>Price: {price}</h3>
    </div>
  )
}

export default Card