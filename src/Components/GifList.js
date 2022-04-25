

function GifList(props) {

    const gif_use = props.gif;
    return (
        <>
            <div className="img_div">
                {
                    gif_use.map((gif_use1, i) => 
                <img src={gif_use1.images.downsized.url} key={i}/>
                )}
            </div>
        </>
    );
}

export default GifList;