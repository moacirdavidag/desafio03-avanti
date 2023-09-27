import "./style.css";
import { FaStar, FaCalendar } from 'react-icons/fa';
import moment from "moment/moment";

export const Movie = ({ title, id, poster, vote, year, handleDetails }) => {

    return (
        <>
            <div className="movie">
                <div className="title">
                    <span>{title}</span>
                    <div>
                        <p><FaStar /> {vote}</p>
                    </div>
                </div>
                <div className="poster">
                    <img src={poster} alt={title} />

                </div>
                <div className="year">
                    <span><FaCalendar /> {moment(year).format('DD/MM/YYYY')}</span>
                </div>
                <button onClick={() => handleDetails(id)}>
                    Detalhes
                </button>
            </div>
        </>
    )
}