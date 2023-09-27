import { Link } from "react-router-dom"
import logo from "../../assets/img/logo.png"
import "./style.css";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
    return (
        <>
            <header>
                <Link to="/">
                    <img src={logo} width="190" height="60" alt="Logo Avanti Flix" className="image_logo"/>
                </Link>

                <div className='search-container' tabIndex='1'>
                      <input placeholder='Pesquisa' type='text'/>
                      <a className='button'>
                        <FaSearch />
                      </a>
                </div>

            </header>
        </>
    )
}