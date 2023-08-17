import Cards from '../cards'
import './index.css'

export default function index() {

    const cardData = [
        {
            title: "MERN Course",
            months: "11",
            courses: "12",
            summary: "Simplilearn Career Bootcamp"
        },
        {
            title: "HTML Course",
            months: "3",
            courses: "3",
            summary: "Simplilearn Career Bootcamp"
        },
    ];

    return (
        <div className="home-main">
            HOME
            <br />
            <div>
                {
                    cardData.map(element => <div className="d-flex flex-row flex-wrap justify-content-center">
                        <Cards element={element} />
                    </div>)
                }
            </div>
        </div>
    );
}