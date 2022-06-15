import {useEffect} from "react";
import {fetchImages} from "./api";

function Header() {
    return (
        <div>masatora.com</div>
    )
}

function Main() {
    const urls = null
    useEffect(() => {
        fetchImages().then((urls) => {
            console.log(urls)
        });
    }, [])
    return (
       <div>Hello, World</div>
    )
}

function Image(props) {
    return (
        <div>
            <img src={props.src} alt="犬の画像" />
        </div>
    )
}

function Gallery() {
    const url = "https://images.dog.ceo/breeds/shiba/shiba-8.jpg";
    return (
        <div>
            <Image src={url} />
        </div>
    )
}

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Gallery />
        </div>
    )
}
export default App