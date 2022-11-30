import imageTopLaptops from '/images/image-top-laptops.jpg';

function SecondCard() {
    const secondCarrouselImageProperties = {
        width: '6rem',
        height: '7.9rem',
        padding:'0'
    };

    return (
        <div className="col pe-lg-5">
            <div className="row p-0">
                <img src={imageTopLaptops} style={secondCarrouselImageProperties} alt="" />
                <div className="col p-0">
                    <header className="carrousel-card-headers text-left">02</header>
                    <dt className="carrousel-card-title">Top 10 Laptops of 2022</dt>
                    <span className="carrousel-card-text">
                        Our best picks for various <br /> needs and budgets
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SecondCard;