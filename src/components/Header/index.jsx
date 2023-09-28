import { Link, NavLink, useNavigate } from "react-router-dom"
import logo from "../../assets/img/logo.png"
import "./style.css";
import { FaSearch, FaHeart } from "react-icons/fa";
import { useState } from "react";

export const Header = () => {
    const [valueSearch, setValueSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.code === "Enter") {
            if (valueSearch === "" || valueSearch === null) {
                setValueSearch("Digite o nome do filme")
            } else {
                console.log(valueSearch)
                navigate(`/pesquisa/${valueSearch}`);
                setValueSearch("");
            }
        }
    }
    
    return (
        <>
            <header>
                <Link to="/">
                    <img src={logo} width="190" height="60" alt="Logo Avanti Flix" className="image_logo" />
                </Link>
                <div className="favorites">
                    <Link to={'/favorites'}><FaHeart /> Meus favoritos</Link>
                </div>
                <div className='search-container' tabIndex='1'>
                    <input id="input-pesquisa" className="input-search" placeholder='Pesquisa'
                        value={valueSearch}
                        onChange={e => {
                            setValueSearch(e.target.value)
                        }}
                        type='text'
                        onKeyDown={(e) => {
                            handleSearch(e);
                        }}
                    />
                    <a className='button'>
                        <FaSearch />
                    </a>
                </div>

            </header>
        </>
    )
}