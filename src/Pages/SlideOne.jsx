import { Link } from "react-router-dom"
export default function SlideOne(){
    return(
        <>
        <header className="App-header">
        <div className="p-5">
        <img src="https://i.ibb.co/GxC6cgG/st-small-507x507-pad-600x600-f8f8f8-removebg-preview.png" className="img-fluid" alt="logo" />
        <p className="text-pink text-align-center">
        Hufftt kaya dirumah lagi deh kalo bsk libur apa nganggur susah tidur heran baru 2 hari kerja trs libur aja &#128513; gabut jadinya, tapi gapapa sih yang penting ga jauhan sama kamu kaya kemaren
        sih beb, iya LDR emg ga menyenangkan sih kalo lama-lama &#128557;&#128557;&#128557;, kalo dah disini mah mau jauhan dikit jg gapapa asal kita bisa ketemu gitu, kalo ga naik kereta aja berarti kita deket ehehehe</p>
        <Link to="/slidetwo" className="btn btn-pink rounded-pill mt-3">Hah? Terusss??? &#128533;</Link>
        </div>
      </header>
        </>
    )
}