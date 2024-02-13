import { Link } from "react-router-dom"
export default function SlideTwo(){

    return(
        <>
        <header className="App-header">
        <div className="p-5">
        <img src="https://i.ibb.co/wrHkDZW/desktop-wallpaper-panda-bear-bubu-dudu-cute-love-bubu-dudu-removebg-preview.png" className="img-fluid" alt="logo" />
        <p className="text-pink text-align-center">
        Terus gak kenapa-kenapa sih cuma kangen ajaa dah sebulan ga liat dari deket kamu yg 
        agak nyebelin itu tp cantik sm bikin kangen sih wkwkwkwk &#128518;&#128518;&#128518;</p>
        <h5 className="fw-bold text-pink display-7 mt-3 mb-2">Kamu ga kangen akuu?? &#128531;</h5>
        <Link to="/slidethree" className="btn btn-pink rounded-pill m-2">Kangen banget!!! &#128525;</Link>
        <Link to="/slidethree" className="btn btn-pink rounded-pill m-2">Kangen Aja &#128527;</Link>
        </div>
      </header>
        </>
    )
}