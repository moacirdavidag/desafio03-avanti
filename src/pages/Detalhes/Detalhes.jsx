import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header"
import { api } from '../../services/api';
import { FaStar, FaHeart } from 'react-icons/fa';


import "./style.css"
import { useParams } from "react-router-dom";
import moment from "moment";
import { FavoritesContext } from "../../context/FavoritesContext";

export const Detalhes = () => {

    const id = useParams().id;
    const [movie, setMovie] = useState([]);
    const { getFavoriteMovieById, addFavoriteMovie } = useContext(FavoritesContext);

    useEffect(() => {
        const fetchMovie = async () => {

            api.get(`/movie/${id}?language=pt`)
                .then(response => {
                    setMovie(response.data);
                })
                .catch(error => {
                    console.error('Ocorreu um erro ao obter os detalhes do filme:', error);
                });
        }
        fetchMovie();
    }, []);


    return (
        <>
            <div className="detalhes-container d-flex flex-column align-items-center justify-content-center">
                <Header />
                <h1>{movie.original_title}</h1>
                <h5>{moment(movie.release_date).format('DD/MM/YYYY')}</h5>
                <img className="detalhes-icon" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                <link rel="icon" href="./assets/icone_logo_aba.png" />
                <h5 className="text-warning" >{movie.vote_average}
                    <FaStar />
                </h5>
                <div>
                    <div>
                        <FaHeart color={getFavoriteMovieById(movie.id) ? 'red' : 'white'}
                            cursor={"pointer"}
                            onClick={() => {
                                const movieObject = {
                                    id: movie.id,
                                    title: movie.title,
                                    poster: movie.poster_path,
                                    vote: movie.vote,
                                    year: movie.year
                                }
                                addFavoriteMovie(movieObject)
                            }}
                        />
                    </div>
                    <h4>Genero(s)</h4>
                    {
                        movie.genres?.map((genre) => (
                            <span key={genre.id}>{`${genre.name}`} <br /> </span>
                        ))
                    }
                </div>

                <p className="mt-4">{movie.overview}</p>

                <div>
                    <h4>Companhias de produção</h4>
                    {
                        movie.production_companies?.map((companies) => (
                            <span key={companies.id}>
                                {companies.logo_path != undefined &&
                                    <img className="detalhes-companies" src={`https://image.tmdb.org/t/p/original/${companies.logo_path}`}></img>
                                }

                            </span>
                        ))
                    }
                </div>

            </div>
        </>
    )
}
