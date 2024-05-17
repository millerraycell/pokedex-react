import { useEffect, useState } from "react";
import api from "../../services/api";
import { Button, Modal } from "react-bootstrap";
import './styles.css';

interface PokemonCard {
    pokemon: string;
}

function PokemonCard(props: PokemonCard) {
    const [pokemon, setPokemon] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const formatPokemonName = (pokemon: string) => `${pokemon[0].toUpperCase()}${pokemon.slice(1)}`


    useEffect(() => {
        api.get(`pokemon/${props.pokemon}`)
            .then(response => {
                setPokemon(response.data)
            })
    }, []);

    return (
        <>
            <Button variant="primary" className="m-2" onClick={handleShow}>{props.pokemon}</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{formatPokemonName(props.pokemon)}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex align-items-center justify-content-center">
                    <img className="pokemon-image" src={pokemon?.sprites?.front_default} alt={props.pokemon} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PokemonCard;