import { useEffect, useState } from "react";
import { Header } from "../../components/Header"
import { api } from '../../services/api';
import { FaStar, FaCalendar } from 'react-icons/fa';


import "./style.css"
import { useParams } from "react-router-dom";
export const Detalhes = () => {

    

    const id = useParams().id;
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {

            api.get(`/movie/${id}?language=pt`)
                .then(response => {
                    setMovie(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Ocorreu um erro ao obter os detalhes do filme:', error);
                });
        }
        fetchMovie();
    }, []);


    return (
        <>
            <div className="detalhes-container .d-flex flex-column align-items-center">
                <Header />
                <h1>{movie.original_title}</h1>
                <h5>{movie.release_date}</h5>
                <img className="detalhes-icon" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                <link rel="icon" href="./assets/icone_logo_aba.png" />
                <h5 className="text-warning" >{movie.vote_average}</h5>
                <p>{movie.overview}</p>
            </div>
        </>
    )
}
