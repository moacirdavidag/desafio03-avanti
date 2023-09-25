import logo from "../../assets/img/logo.png"
import "./style.css"
export const Header = () => {
    return (
        <>
            <header>
                <img src={logo} width="190" height="60"  alt="Logo Avanti Flix" className="image_logo"/>
                <div className="search-box">
                    <input className="search-text" type="text" name="" placeholder="Pesquisa"/>
                </div>
            </header>
        </>
    )
}