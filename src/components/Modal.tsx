import React from 'react'
import Button from './Button';
import ContactForm from './ContactForm';

type Props = {
    id?: string,
    open: boolean,
    onClose: () => void;
}

const Modal = ( props:Props ) => {
    if (!props.open) return null;
    return (
        <div onClick={ props.onClose } className="fixed w-full h-full flex overflow-auto z-1 justify-center align-middle bg-gray-300 bg-opacity-25">
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className="max-w-600px w-2/5 fixed flex z-1 mt-20 bg-white shadow-xl rounded"
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <Button 
                            className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'
                            onClick={ props.onClose }
                        >
                            X
                        </Button>
                    </div>
                    <div className="flex flex-col items-center text-center mt-3 p-2">
                        <ContactForm id={ props.id }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;