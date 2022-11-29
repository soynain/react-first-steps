import LeftUpperComponents from "./LeftImageColumnsComponent";
import '../../RightUpperComponentStyles.css';
import RightUpperColumn from "./RightUpperColumnComponent";
import LowerRowCarrouseLike from "./LowerRowComponent";
function MainBody() {
    
    return (
        <main className="bg-light container-fluid overflow-hidden p-0">
            <div className="container overflow-hidden pt-5 bg-light">
                <div className="row">
                    <LeftUpperComponents/>
                    <RightUpperColumn/>
                </div>
                <LowerRowCarrouseLike/>
            </div>
        </main>
    );
}

export default MainBody;