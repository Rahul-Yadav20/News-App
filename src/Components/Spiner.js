import React from 'react';
import loading from './Coronavirus.gif'
const Spiner = () => {
    return (
      <div className='text-center my-3'>
        <img src={loading} alt="loading" />
      </div>
    )
  
}

export default Spiner
