import React from 'react'
import './styles.css'

function SmallCircle(props: {isChecked: boolean}) {
  return (
    <div>
        <div className='circle selected-circle'>
            <div className={props.isChecked ? 'circle unselected-circle none' : 'circle unselected-circle'} />
        </div>
    </div>
  )
}

export default SmallCircle