import React, { useState } from 'react';
import Modal from 'react-modal';


function GifList(props) {

    const gif_use = props.gif;
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [selectedItem, setselectedItem] = useState('');

  
    return (
        <>
            <div className="img_div row">
                {
                    gif_use.map((gif_use1, id) => 
                <img className="col-lg-4" src={gif_use1.images.downsized.url} 
                alt='gif-result' 
                onClick={ () => {
                    setModalIsOpen(true);
                    setselectedItem(gif_use1);
                }}
                key={id} />
                
                )}
            </div>
            <Modal isOpen={modalIsOpen} selectedItem={selectedItem} onRequestClose={
                () => setModalIsOpen(false)
                }>
                    <div>
                        
                        <h4>Title: {selectedItem.title}</h4>
                        <p>Source: {selectedItem.source}</p>
                        <p>URL: {selectedItem.url}</p>
                        <p>ID: {selectedItem.id}</p>
                        <p>Rating: {selectedItem.rating}</p>
                        <p>Trending Datetime: {selectedItem.trending_datetime}</p>
                    </div>
                    
                    <button onClick={
                    () => setModalIsOpen(false)
                }>close</button>
            </Modal>
            
         </>
    );
}

export default GifList;