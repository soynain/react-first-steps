import imageWebDesktop from '../../../public/images/image-web-3-desktop.jpg';
import '../../LeftUpperComponentsStyles.css';
import ReadMoreLeftUpper from './ReadMoreComponent';
import Web3Header from './Web3HeaderComponent';
function LeftUpperComponents() {
    const imageWebDesktopStyle = {
        width: "45rem",
        height: "18rem"
    }
    return (
        <div className="col col-lg-8">
            <div className="row">
                <div className="col">
                    <img style={imageWebDesktopStyle} src={imageWebDesktop} alt="" />
                    <div className="row mt-3">
                        <Web3Header/>
                        <ReadMoreLeftUpper/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftUpperComponents;