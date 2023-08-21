import React from 'react'
import './Module.css'

function Module(props) {
  return (
    <> 
    <div className="box">
      <div className="container">
        <div className='row'>
          <div className='col-md-6'>
            <div className='box-part'>
              <div className='c1'>
                <img src={props.img}></img>
              </div>
              <h3 className="h3">
                {props.head}
              </h3>

            </div>

          </div>

        </div>
        </div> 
    
    </div>
    </>
  

  )
}

export default Module