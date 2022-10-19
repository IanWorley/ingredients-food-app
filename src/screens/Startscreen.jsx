import React from 'react'

function Startscreen() {
  
  const searchRef =  React.useRef()

  const searchQuery = (e) => {
    e.preventDefault()
    console.log(searchRef.current.value)
  
  }

  return (
    <div className= 'flex justify-evenly '>
      <div className='bg-secondary shadow-lg p-10   '>
        <h1 className='text-4xl p-10'> Welcome To the website </h1>   
        <form onSubmit={ searchQuery } className='grid form'>
          <input type="text" className='pr-5 justify-self-start' ref={searchRef} /> 
        <button className='bg-quaternary text-white p-2 rounded-lg justify-self-end'> Submit </button>

        </form>

      </div>




    </div>
  )
}




export default Startscreen