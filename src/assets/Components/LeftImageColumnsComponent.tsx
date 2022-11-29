
import '../../LeftUpperComponentsStyles.css';
import UpperLeftImg from './LeftImageComponent';
import ReadMoreLeftUpper from './ReadMoreComponent';
import Web3Header from './Web3HeaderComponent';
function LeftUpperComponents() {
    const imageWebDesktopStyle = {
        width: "100%",
        height: "100%"
    }
    return (
        <div className="col col-lg-8 left-main-column">
            <UpperLeftImg/>
            <div className="row pt-2">
                <Web3Header />
                <ReadMoreLeftUpper />
            </div>
        </div>
    );
}

export default LeftUpperComponents;