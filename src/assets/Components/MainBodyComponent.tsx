import LeftUpperComponents from "./LeftImageColumnsComponent";
import '../../RightUpperComponentStyles.css';
import RightUpperColumn from "./RightUpperColumnComponent";
import LowerRowCarrouseLike from "./LowerRowComponent";
function MainBody() {
    
    return (
        <main className="bg-light container-lg-fluid p-0">
            <div className="container-lg pt-lg-5 pt-sm-0 bg-light">
                <div className="row-lg main-upper-row">
                    <LeftUpperComponents/>
                    <RightUpperColumn/>
                </div>
                <LowerRowCarrouseLike/>
            </div>
        </main>
    );
}

export default MainBody;