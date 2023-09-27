import { useEffect, useState } from "react";
import { Header } from "../../components/Header"
import { api } from '../../services/api';

import "./style.css"

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

export const Detail = () => {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState({
        status: true,
        text: "Falha na autenticação da API"
    });

    useEffect(() => {
        const fetchMovies = async () => {
            
            try {
                
                const response = await api.get('tv/762430');

                if (response.status === 200) {
                    setError({
                        status: false,
                        text: null
                    });
                    setMovies(response.data.results);
                } else if (response.status === 401) {
                    setError({
                        status: true,
                        text: "Falha na autenticação da API"
                    })
                } else {
                    setError({
                        status: true,
                        text: response.statusText
                    });
                }
            } catch (error) {
                setError({
                    status: true,
                    text: error.message
                });
            }
        }
        fetchMovies();
    }, []);

    console.log(movies);

    return (
        <>
            <Header />
            <div className="detail-container">
                <h1>The Movies</h1>
                <img className="detail-icon" src="https://br.web.img3.acsta.net/pictures/21/03/03/20/40/1002269.jpg" alt="" />
                <link rel="icon" href="./assets/icone_logo_aba.png" />
                <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, nesciunt hic similique dolore doloremque adipisci, tenetur quibusdam aut error totam exercitationem accusamus sapiente officiis corrupti dolores, reiciendis voluptatem libero expedita.</h3>
                <h2>duracao: 2h</h2>
                <h2>genero: comedia</h2>
                <h2>lançamento: 14/12/2000</h2>

            </div>
        </>
    )
}
