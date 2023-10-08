import './Youtube.css';

function Youtube(): JSX.Element {
    return (
        <div className="Youtube">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/g1U8oZTMi5U?si=pBVgYDqg_HBIBHUb" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
    );
}

export default Youtube;
