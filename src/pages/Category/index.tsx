import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import api from "../../services/api";
import CategoryCard from "../../shared/CategoryCard";
import './styles.css'
import PokemonCard from "../../shared/PokemonCard";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Category() {
    const params = useLoaderData();
    const [categoryData, setCategoryData] = useState({});

    useEffect(() => {
        api.get(`type/${params.category}`)
            .then(response => {
                setCategoryData(response.data)
            })
    }, []);

    return (
        <div className="py-3">
            <Link className="text-center" to='/'>
                <p>
                    <AiOutlineArrowLeft />
                    Return To Home
                </p>
            </Link>
            <h2 className="text-center">Category</h2>
            <div className="py-3 d-flex align-items-center justify-content-center category-title">
                <CategoryCard title={params.category} />
            </div>

            <h2 className="text-center pb-3">Damage Information</h2>

            <div className="row row-cols-2 m-0 mx-3 g-2">
                <div className="col p-2 rounded border bg-white">
                    <h4 className="text-center border-bottom pb-2">Double Damage From</h4>
                    <div className="row row-cols-auto d-flex justify-content-center m-0">
                        {
                            categoryData.damage_relations?.double_damage_from.length ?
                                categoryData.damage_relations?.double_damage_from.map(category =>
                                    <div className="col p-2 damage-info" key={category.name}>
                                        <CategoryCard title={category.name} />
                                    </div>
                                ) :
                                <p className="text-center">No Data</p>
                        }
                    </div>
                </div>
                <div className="col p-2 rounded border bg-white">
                    <h4 className="text-center border-bottom pb-2">Double Damage To</h4>
                    <div className="row row-cols-auto d-flex justify-content-center m-0">
                        {
                            categoryData.damage_relations?.double_damage_to.length ?
                                categoryData.damage_relations?.double_damage_to.map(category =>
                                    <div className="col p-2 damage-info" key={category.name}>
                                        <CategoryCard title={category.name} />
                                    </div>
                                ) :
                                <p className="text-center">No Data</p>
                        }
                    </div>
                </div>
                <div className="col p-2 rounded border bg-white">
                    <h4 className="text-center border-bottom pb-2">Half Damage From</h4>
                    <div className="row row-cols-auto d-flex justify-content-center m-0">
                        {
                            categoryData.damage_relations?.half_damage_from.length ?
                                categoryData.damage_relations?.half_damage_from.map(category =>
                                    <div className="col p-2 damage-info" key={category.name}>
                                        <CategoryCard title={category.name} />
                                    </div>
                                ) :
                                <p className="text-center">No Data</p>
                        }
                    </div>
                </div>
                <div className="col p-2 rounded border bg-white">
                    <h4 className="text-center border-bottom pb-2">Half Damage To</h4>
                    <div className="row row-cols-auto d-flex justify-content-center m-0">
                        {
                            categoryData.damage_relations?.half_damage_to.length ?
                                categoryData.damage_relations?.half_damage_to.map(category =>
                                    <div className="col p-2 damage-info" key={category.name}>
                                        <CategoryCard title={category.name} />
                                    </div>
                                ) :
                                <p className="text-center">No Data</p>
                        }
                    </div>
                </div>
                <div className="col p-2 rounded border bg-white">
                    <h4 className="text-center border-bottom pb-2">No Damage From</h4>
                    <div className="row row-cols-auto d-flex justify-content-center m-0">
                        {
                            categoryData.damage_relations?.no_damage_from.length ?
                                categoryData.damage_relations?.no_damage_from.map(category =>
                                    <div className="col p-2 damage-info" key={category.name}>
                                        <CategoryCard title={category.name} />
                                    </div>
                                ) :
                                <p className="text-center">No Data</p>
                        }
                    </div>
                </div>
                <div className="col p-2 rounded border bg-white">
                    <h4 className="text-center border-bottom pb-2">No Damage To</h4>
                    <div className="row row-cols-auto d-flex justify-content-center m-0">
                        {
                            categoryData.damage_relations?.no_damage_to.length ?
                                categoryData.damage_relations?.no_damage_to.map(category =>
                                    <div className="col p-2 damage-info" key={category.name}>
                                        <CategoryCard title={category.name} />
                                    </div>
                                ) :
                                <p className="text-center">No Data</p>
                        }
                    </div>
                </div>
            </div>

            <h2 className="text-center py-3">Pokemons of this category</h2>

            <div className="bg-white rounded border p-2 mx-2 d-flex flex-wrap justify-content-center">
                {
                    categoryData?.pokemon?.length ?
                        categoryData?.pokemon?.map(poke =>
                            <PokemonCard pokemon={poke.pokemon.name} key={poke.pokemon.name} />
                        ) :
                        <p className="text-center mb-0">No Data</p>
                }
            </div>
        </div>
    );
}

export default Category;