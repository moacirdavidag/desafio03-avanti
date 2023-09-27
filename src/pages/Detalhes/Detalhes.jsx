import { useEffect, useState } from "react";
import { Header } from "../../components/Header"
import { api } from '../../services/api';


import "./style.css"
import { useParams } from "react-router-dom";
export const Detalhes = () => {

    

    const id = useParams().id;
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {

            api.get(`/movie/${id}`)
                .then(response => {
                    setMovie(response.data);
                    console.log(movie);
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
                <h1>The Movies</h1>
                <img className="detalhes-icon" src="https://br.web.img3.acsta.net/pictures/21/03/03/20/40/1002269.jpg" alt="" />
                <link rel="icon" href="./assets/icone_logo_aba.png" />
                <h3>{ }</h3>
                <h2>duracao: 2h</h2>
                <h2>genero:</h2>
                <h2>lançamento: 14/12/2000</h2>
            </div>
        </>
    )
}
