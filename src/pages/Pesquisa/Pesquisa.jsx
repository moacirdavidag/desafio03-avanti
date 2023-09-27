import { Header } from "../../components/Header"
import { api } from "../../services/api";
import "./style.css"
export const Pesquisa = () => {

    let param = useParams().id;

    useEffect(() => {
        const fetchMovie = async () => {

            api.get(`/search/movie/&query=${param}`)
                .then(response => {
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
            <div className="pesquisa-container">
            <Header />
                <h1>Pesquisa</h1>
            </div>
        </>
    )
}
