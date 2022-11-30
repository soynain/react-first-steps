import imageGamingGrowth from '/images/image-gaming-growth.jpg';

function ThirdCard() {
    const thirdCarrouselImageProperties = {
        width: '6rem',
        height: '7.9rem',
        padding:'0'
    };

    return (
        <div className="col">
            <div className="row p-0">
                <img src={imageGamingGrowth} style={thirdCarrouselImageProperties} alt="" />
                <div className="col p-0">
                    <header className="carrousel-card-headers text-left">03</header>
                    <dt className="carrousel-card-title">The Growth of Gaming</dt>
                    <span className="carrousel-card-text text-wrap">
                        How the pandemic has sparked <br /> fresh oportunities
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ThirdCard;