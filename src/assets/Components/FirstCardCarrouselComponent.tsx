import imageRetroPcs from '/images/image-retro-pcs.jpg';
function FirstCard() {
    const firstCarrouselImageProperties = {
        width: '6rem',
        height: '7.9rem',
        padding:'0'
    };
    return (
        <div className="col pe-lg-5">
            <div className="row p-0">
                <img src={imageRetroPcs} style={firstCarrouselImageProperties} alt="" />
                <div className="col p-0">
                    <header className="carrousel-card-headers text-left">01</header>
                    <dt className="carrousel-card-title">Reviving Retro PCs</dt>
                    <span className="carrousel-card-text">
                        What happens when old PCs <br />
                        are given modern upgrades
                    </span>
                </div>
            </div>
        </div>
    );
}

export default FirstCard;