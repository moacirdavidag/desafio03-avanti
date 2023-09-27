import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header"
import { api } from "../../services/api";
import "./style.css"
import { useEffect, useState } from "react";
import { Movie } from "../../components/Movie";
export const Pesquisa = () => {

    const [movie, setMovie] = useState([]);
    let param = useParams().id;
    const navigate = useNavigate();

    const navLink = (id) => {
        navigate(`/detalhes/${id}`)
    }

    const handleMovieDetailsPage = (id) => {
        navigate(`/detalhes/${id}`);
    }

    useEffect(() => {
        const fetchMovie = async () => {

            api.get(`/search/movie?query=${param}`)
                .then(response => {
                    setMovie(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Ocorreu um erro ao obter os detalhes do filme:', error);
                });
        }
        fetchMovie();
    }, [param]);

    return (


        <>
            <div className="pesquisa-container">
                <Header />

                <div>
                    <h4 className="mb-5">Resultados</h4>
                    {
                        movie.results?.map((mv) => (
                            <span key={mv.id} className="d-flex">
                                <h5 className="" >{`${mv.title}`} </h5>

                                {/* {mv.poster_path != undefined &&
                                    <img className="pesquisa-img" src={`https://image.tmdb.org/t/p/original/${mv.poster_path}`}></img>
                                } */}

                                <Movie key={mv.id}
                                            title={mv.title}
                                            poster={`https://image.tmdb.org/t/p/original/${mv.poster_path}`}
                                            year={mv.release_date}
                                            vote={mv.vote_average}
                                            id={mv.id}
                                            handleDetails={handleMovieDetailsPage}/>

                            </span>
                        ))
                    }
                </div>

            </div>
        </>
    )
}
