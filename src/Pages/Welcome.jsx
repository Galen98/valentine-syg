import { Link } from "react-router-dom"
export default function Welcome(){

    return(
        <>
        <header className="App-header">
        <div className="p-5">
        <img src="https://i.ibb.co/CPWcfpP/93b6f5f21f71d76c411fbda539e08033.jpg" className="img-fluid" alt="logo" />
        <h5 className="fw-bold text-pink display-7">Hay SAYANGKU dah bangun ya? heheheh cantik deh kalo bangun tidur</h5>
        <Link to="/slideone" className="btn btn-pink rounded-pill mt-3">Klik sini dulu tar tak beliin kopi &#128521;</Link>
        </div>
      </header>
        </>
    )
}