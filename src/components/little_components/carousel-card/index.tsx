import React, { ReactNode } from 'react'
import './styles.css'

function CarouselCard(props: {children: ReactNode}) {
  return (
    <div className='carousel-card'>
        {props.children}
    </div>
  )
}

export default CarouselCard