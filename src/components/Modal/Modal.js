import React from 'react'

import './Modal.css'

const Modal = props => {
    if (!props.show) {
        return null
    }

    return (
        <>
            <div className='modal' onClick={props.onClose}>
                <div className='modal_content' onClick={(e) => e.stopPropagation()}>
                    <div className='modal_header'>
                        <h2 className='modal_title'>{props.title}</h2>
                    </div>
                    <div className='modal_body'>
                        {props.children}
                    </div>
                    <div className='modal_footer'>
                        <button onClick={props.onClose} className='modal_close_btn'>Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal