import '../../LowerCarrouselStyles.css';
import FirstCard from './FirstCardCarrouselComponent';
import SecondCard from './SecondCardCarrouselComponent';
import ThirdCard from './ThirdCardCarrouselComponent';
function LowerRowCarrouseLike() {
    return (
        <div className="row-lg mt-3 carrousel-main-row">
            <FirstCard/>
            <SecondCard/>
            <ThirdCard/>
        </div>
    );
}

export default LowerRowCarrouseLike;