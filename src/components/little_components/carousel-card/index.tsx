import { motion } from 'framer-motion'
import React, { ReactNode, useEffect, useState } from 'react'
import './styles.css'

function CarouselCard(props: {children: ReactNode}) {
  return (
    <div className='carousel-card'>
        {props.children}
    </div>
  )
}

function CarouselCardAnimation(props: {children: ReactNode, index: number, checkedIndex: number}) {
  const [isAnimationComplete, setAnimationComplete] = useState(false)

  const variants = {
    hidden: { opacity: 1, x: window.innerWidth},
    visible: {opacity: 1, x: 0},
    exit: {opacity: 1 ,x: -window.innerWidth}
  }

  const setTransitionDirection = (index: number) => {
    if(index < props.checkedIndex) {
        return true
    } else if(props.checkedIndex < index) {
        return false
    }
  }

  const handleAnimationComplete = () => {
    if(props.index !== props.checkedIndex) {
      setAnimationComplete(true)
    }
  }

  useEffect(() => {
    if(props.index === props.checkedIndex) {
      setAnimationComplete(false)
    }
  }, [props.checkedIndex, props.index])

  return <motion.div
    initial={'hidden'}
    animate={props.checkedIndex === props.index ? 'visible' : setTransitionDirection(props.index) ? 'exit' : 'hidden' }
    transition={{duration: 0.7}}
    variants={variants}
    onAnimationComplete={handleAnimationComplete}
    className={isAnimationComplete ? 'none' : ''}
  >
    <CarouselCard>
      {props.children}
    </CarouselCard>
  </motion.div>
}

export { CarouselCard, CarouselCardAnimation } 