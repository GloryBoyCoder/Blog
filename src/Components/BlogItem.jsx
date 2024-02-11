import React from 'react'
import Card from './shared/Card.jsx'

function BlogItem() {
  return (
    <div>
        <Card>
            <div className='date'><h4>Date posted</h4></div>
            <div className='item-header'><h2>Starting a startup</h2></div>
            <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Ipsa quos praesentium facilis fuga placeat doloribus voluptatibus eveniet exercitationem est nisi. Minus, 
                enim recusandae cupiditate aperiam exercitationem veritatis iure sint. Possimus!
                </p>
            </div>
        </Card>
    </div>
  )
}

export default BlogItem