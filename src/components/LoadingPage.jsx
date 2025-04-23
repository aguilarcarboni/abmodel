import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group';
import './LoadingPage.css'; // Import the CSS file for styling

const LoadingPage = ({showLoadingPage}) => {
    const nodeRef = useRef(null);

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
                    <div className="stars"></div>
                    <div className="spinner"></div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default LoadingPage