import imageWebDesktop from '/images/image-web-3-desktop.jpg';
import imageWebMovile from '/images/image-web-3-mobile.jpg';
function UpperLeftImg() {
    return (
        <div className="row image-web-container">
            <div className="col p-0">
                <img id="image-web-version" src={imageWebDesktop} alt="" />
                <img id="image-mobile-version" src={imageWebMovile}/>
            </div>
        </div>
    );
}

export default UpperLeftImg;