import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header"
import { api } from "../../services/api";
import "./style.css"
import { useEffect, useState } from "react";
import { Movie } from "../../components/Movie";
import { Carousel } from "react-bootstrap";

export const Pesquisa = () => {

    const [movie, setMovie] = useState([]);
    let param = useParams().id;
    const navigate = useNavigate();

    const handleMovieDetailsPage = (id) => {
        navigate(`/detalhes/${id}`);
    }

    useEffect(() => {
        const fetchMovie = async () => {

            api.get(`/search/movie?query=${param}`)
                .then(response => {
                    setMovie(response.data.results);
                })
                .catch(error => {
                    console.error('Ocorreu um erro ao obter os detalhes do filme:', error);
                });
        }
        fetchMovie();
    }, [param]);

    const groupedMovies = [];
    for (let i = 0; i < movie.length; i += 5) {
        groupedMovies.push(movie.slice(i, i + 5));
    }

    return (
        <>
            <section className="PageWrapper">
                <div className="wrapper">
                    <Header />
                    <section className="filmes">
                        {Array.isArray(movie) ? (
                            <Carousel indicators={false}>
                                {groupedMovies.map((group, index) => (
                                    <Carousel.Item key={index}>
                                        <div className="d-flex justify-content-between">
                                            {group.map(movie => (
                                                <Movie
                                                    key={movie.id}
                                                    title={movie.title}
                                                    poster={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                                    year={movie.release_date}
                                                    vote={movie.vote_average}
                                                    id={movie.id}
                                                    handleDetails={handleMovieDetailsPage}
                                                />
                                            ))}
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        ) : (
                            <>
                                <h3>Ops!</h3>
                                <p>Nenhum filme encontrado!</p>
                            </>
                        )}

                    </section>
                </div>
            </section>
        </>
    )

}

