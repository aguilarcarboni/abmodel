import React, { useRef } from 'react'
import Lottie from 'react-lottie'
import loadingAnimationData from '../assets/loadingAnimation.json'
import { CSSTransition } from 'react-transition-group';

const LoadingPage = ({showLoadingPage}) => {
    const nodeRef = useRef(null);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
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
                <Lottie 
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
        </div>
    </CSSTransition>
    </div>
  )
}

export default LoadingPage