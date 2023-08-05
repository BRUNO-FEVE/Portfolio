import React from 'react'
import { IconType } from 'react-icons'
import './styles.css'

function IconComponent(props: {icon: IconType, label: String}) {
  return (
    <div className='icon-component'>
      <props.icon className='icon-left' />
      <p>{props.label}</p>
    </div>
  )
}

export default IconComponent