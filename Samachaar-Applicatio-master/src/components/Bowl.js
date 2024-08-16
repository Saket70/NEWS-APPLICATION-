import React, { Component } from 'react'
import spin from './spin.gif';
export class Bowl extends Component {
  render() {
    return (
      <div className='text-center' >
        <img style={{width:"450px"}} src={spin} alt="spinning" />
      </div>
    )
  }
}

export default Bowl
