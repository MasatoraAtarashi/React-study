import {useEffect, useState} from "react";
import {fetchImages} from "./api";

function Header() {
    return (
        <div>masatora.com</div>
    )
}

function Image(props) {
    return (
        <div>
            <img src={props.src} alt="犬の画像" />
        </div>
    )
}

function Gallery(props) {
    const { urls } = props
    if (urls == null) {
        return <p>Loading</p>
    }
    return (
        <div>
            {
                urls.map((url) => {
                    return (
                        <div key={url}>
                            <Image src={url} />
                        </div>
                    )
                })
            }
        </div>
    )
}

function Main() {
    const [urls, setUrls] = useState(null)
    useEffect(() => {
        fetchImages().then((urls) => {
            console.log(urls)
            setUrls(urls)
        });
    }, []);
    return (
        <div>
            Hello, World
            <h1>a</h1>
            <Gallery urls={urls} />
        </div>
    )
}

function App() {
    return (
        <div>
            <Header />
            <Main />
        </div>
    )
}
export default App