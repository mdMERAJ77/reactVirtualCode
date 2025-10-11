import './App.css'
function Box({name="by default: HAMZA",profession="WEB DEV"}) {
  return (
    <div className='box'>
        <h1>{name}</h1>
        <h2>{profession}</h2>
    </div>
  )
}

export default Box