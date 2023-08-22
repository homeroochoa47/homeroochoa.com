import React, { forwardRef, useContext, useEffect } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { directionToMoveContext } from '@/pages/_app'

interface PageTransitionProps extends HTMLMotionProps<'div'> {
    pageKey: string;
}
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function PageTransition({ children, pageKey, ...rest }: PageTransitionProps, ref: PageTransitionRef) {
  const { directionToMove, setDirectionToMove } = useContext(directionToMoveContext);
  
  const moveRight = { x: '100%' }
  const centerPosition = { x: 0, y: 0 }
  const moveLeft = { x: '-100%' }
  const moveDown = { y: '100%' }
  const moveUp = { y: '-100%' }
  const transition = { type: 'spring', stiffness: 125, damping: 21 }

  // sets the motion animation properties based on the direction that the clicked button is pointing
  // This direction is being received as from the context state, directionToMove
  const animationDirections = {
    'right': {
      initial: moveRight,
      animate: centerPosition,
      exit: moveLeft,
      reverseDirection: 'left'
    }, 
    'left': {
      initial: moveLeft,
      animate: centerPosition,
      exit: moveRight,
      reverseDirection: 'right'
    }, 
    'bottom': {
      initial: moveDown,
      animate: centerPosition,
      exit: moveUp,
      reverseDirection: 'top'
    }, 
    'top': {
      initial: moveUp,
      animate: centerPosition,
      exit: moveDown,
      reverseDirection: 'bottom'
    }, 
  }
  const directions = animationDirections[directionToMove];

  // If the user presses back in their browser
  useEffect(() => {
    const reverseDirection = directions.reverseDirection as "right" | "left" | "top" | "bottom";

    const handlePopstate = () => {
      setDirectionToMove(reverseDirection);
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [directionToMove]);

  
  return (
    <motion.div
      className='h-full absolute w-full'
      ref={ref}
      initial={directions.initial}
      animate={centerPosition}
      exit={directions.exit}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default forwardRef(PageTransition)
