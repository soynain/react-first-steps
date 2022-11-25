import LeftUpperComponents from "./LeftImageColumnsComponent";
import '../../RightUpperComponentStyles.css';
function MainBody() {
    
    return (
        <main className="bg-light container-fluid">
            <div className="container pt-5 bg-light">
                <div className="row">
                    <LeftUpperComponents/>

                    <div className="col p-4 col-lg-4 col-md-2 right-upper-component d-flex flex-column justify-content-between">
                        <header id="right-upper-header">
                            New
                        </header>
                        <div className="row">
                            <div className="col">
                                <header className="article-headers">
                                    Hydrogen VS Electric Cars
                                </header>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainBody;