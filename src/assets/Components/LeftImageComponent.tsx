import imageWebDesktop from '/images/image-web-3-desktop.jpg';
function UpperLeftImg() {
    const imageWebDesktopStyle = {
        width: "100%",
        height: "100%"
    }
    return (
        <div className="row row-cols-1">
            <div className="col p-0">
                <img style={imageWebDesktopStyle} src={imageWebDesktop} alt="" />
            </div>
        </div>
    );
}

export default UpperLeftImg;