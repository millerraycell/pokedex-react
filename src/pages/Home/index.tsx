import { useEffect, useState } from "react";
import api from "../../services/api";
import CategoryCard from "../../shared/CategoryCard";
import { Link } from "react-router-dom";

function Home() {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        api.get('type')
            .then(response => {
                setTypes(response.data.results)
            });
    }, []);

    return (
        <div>
            <div className="py-3">
                <h1 className="text-center">
                    Welcome to your React made Pokedex
                </h1>
            </div>

            <div className="row row-cols-md-4 row-cols-auto mx-0 px-2">
                {
                    types.map(type =>
                        <Link className="col p-2 text-decoration-none text-black" key={type.name} to={`category/${type.name}`}>
                            <CategoryCard title={type.name}/>
                        </Link>
                    )
                }
            </div>
        </div>
    );
}

export default Home;