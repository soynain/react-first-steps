function RightUpperColumn() {
    return (
        <div className="col p-4 right-upper-component d-flex flex-column justify-content-between">
            <header id="right-upper-header">
                New
            </header>
            <div className="row">
                <div className="col">
                    <header className="article-headers mb-2">
                        Hydrogen VS Electric Cars
                    </header>
                    <span className="article-preview-text">
                        Will hydrogen-fueled cars ever catch up
                        to EVs?
                    </span>
                    <hr className="article-row-line-divider" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <header className="article-headers mb-2">
                        The Downsides of AI Artistry
                    </header>
                    <span className="article-preview-text">
                        What are the possible adverse effects of
                        on-demand AI image generation?
                    </span>
                    <hr className="article-row-line-divider" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <header className="article-headers mb-2">
                        Is VC Funding Drying up?
                    </header>
                    <span className="article-preview-text">
                        Private funding by VC firms is down 50%
                        YOY. We take a look at what that means.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default RightUpperColumn;