import React, { useState } from 'react';
import Modal from 'react-modal';


function GifModal(props) {


    const gif_use = props.selectedItem;
    
    const [modalIsOpen, setModalIsOpen] = useState(true);

    return (

        <>
            
            <Modal idDrink={selectedItem} isOpen={modalIsOpen} onRequestClose={
                () => setModalIsOpen(false)
                }>
                    
                    {
                    gif_use.map((gif_use1, i) => 
                    <img className="col-lg-4" src={gif_use1.images.downsized.url} 
                alt='gif-result' 
                onClick={
                    () => setModalIsOpen(true)
                }
                key={i}/>
                    )}
                    <button onClick={
                    () => setModalIsOpen(false)
                    }>close</button>
                </Modal>
        </>
    );
}

export default GifModal;