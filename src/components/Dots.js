import React from 'react'
import { getTranslateXRanges } from '../helpers'

function Dots({
  data: { dots, slidesToShow, translateX, currentDot },
  onClick,
  ...restProps
}) {
  const formatDotClassName = (dot) => {
    let className = 'dot'

    if (translateX !== undefined && slidesToShow !== undefined) {
      const {
        currentTranslateXRange,
        nextTranslateXRange
      } = getTranslateXRanges(dot, slidesToShow)

      const dotIsWithinTransLateXRange =
        translateX <= currentTranslateXRange && translateX > nextTranslateXRange

      if (dotIsWithinTransLateXRange) {
        className += ' dot--active'
      }
    } else {
      if (dot === currentDot) {
        className += ' dot--active'
      }
    }

    return className
  }

  return (
    <div className='dots' data-testid='dots' {...restProps}>
      {dots.map((dot) => (
        <button
          key={dot}
          role='dot-button'
          onClick={() => onClick(dot)}
          className={formatDotClassName(dot)}
        />
      ))}
    </div>
  )
}

export default Dots

