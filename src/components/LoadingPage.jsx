import React, { useRef, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';

const LoadingPage = ({showLoadingPage}) => {
    const nodeRef = useRef(null);
    const starsRef = useRef(null);

    useEffect(() => {
        if (showLoadingPage && starsRef.current) {
            createStars();
        }
    }, [showLoadingPage]);

    const createStars = () => {
        const stars = starsRef.current;
        stars.innerHTML = '';
        const count = 100;
        
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            stars.appendChild(star);
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
                    <div className='stars' ref={starsRef}></div>
                    <div className='planet-container'>
                        <div className='planet'></div>
                        <div className='planet-ring'></div>
                    </div>
                    <div className='loading-text'>
                        <span>L</span>
                        <span>O</span>
                        <span>A</span>
                        <span>D</span>
                        <span>I</span>
                        <span>N</span>
                        <span>G</span>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default LoadingPage