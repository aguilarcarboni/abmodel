import React, { useRef } from 'react'
import Lottie from 'lottie-react'
import loadingAnimationData from '../assets/loadingAnimation.json'
import { CSSTransition } from 'react-transition-group';

const LoadingPage = ({showLoadingPage}) => {
    const nodeRef = useRef(null);
    const animationStyle = {
        heigh: '400px',
        width: '400px',
    }

    return (
        <div>
        <CSSTransition
        in={showLoadingPage}
        nodeRef={nodeRef}
        timeout={500}
        classNames="loadingPageAnimation"
        unmountOnExit
      >
        <div className='loadingPageContainer' ref={nodeRef}>
            <div className='loadingAnimation'>
                <div>
                <Lottie
                    animationData={loadingAnimationData}
                    loop={true}
                    style={animationStyle}
                />
                </div>
            </div>
        </div>
    </CSSTransition>
    </div>
  )
}

export default LoadingPage