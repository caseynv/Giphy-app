import React, { useState } from 'react';
import Modal from 'react-modal';


function GifList(props) {

    const gif_use = props.gif;
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [selectedItem, setselectedItem] = useState([]);

  
    return (
        <>
            <div className="img_div row">
                
                {
                    gif_use.map((gif_use1, id) => 
                <img className="col-lg-4" src={gif_use1.images.downsized.url} 
                alt='gif-result' 
                onClick={ () => {
                    setModalIsOpen(true);
                    setselectedItem(gif_use);
                    console.log(selectedItem)
                }}
                key={id} />
                
                )}
            </div>
            <Modal isOpen={modalIsOpen} selectedItem={selectedItem} onRequestClose={
                () => setModalIsOpen(false)
                }>
                     {
                    selectedItem.map((selectedItem1, id) => 
                <img src={selectedItem1.images.downsized.url} 
                alt='gif-result' 
                key={id} />
                
                )}
                    
                    <button onClick={
                    () => setModalIsOpen(false)
                    }>close</button>
                </Modal>
         </>
    );
}

export default GifList;