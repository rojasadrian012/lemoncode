import React from "react";
import { Link, useParams } from "react-router-dom";

import { Typography } from "@mui/material";
import styles from "./detail.module.css";
import { routes } from "../../../routes";
import { Character } from './interfaces/character.model';



export const CharacterDetailPage: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = React.useState<Character | null>(null);

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`).
      then(response => response.json()).
      then((data: Character) => {
        setCharacter(data);
      })
  }, [])

  return (
    character !== null && (
      <>
        <Typography component="h1" variant="h4" align="center">
          Detalles del personaje <Typography component="span" variant="h4" color="primary">{character.name}</Typography>
        </Typography>

        <div className={styles.imageContainer}>
          <img src={character.image} alt={`foto de ${character.name}`} />
        </div>
        <div className={styles.infoContainer}>
          <div>
            <p>Género:
              <span>{" "}{character.gender}</span>
            </p>

            <p>Especie:
              <span>{" "}{character.species}</span>
            </p>

            <p>Estatus:
              <span>{" "}{character.status}</span>
            </p>
          </div>

          <div>
            <p>Creado:
              <span>{" "}{new Date(character.created).toLocaleDateString()}</span>
            </p>

            <p>Origen:
              <span>{" "}{character.origin.name}</span>
            </p>

            <p>Localización:
              <span>{" "}{character.location.name}</span>
            </p>
          </div>

        </div>

        <div className={styles.footer}>
          <Link to={`/${routes.rickAndMortyCharacterList}`}>Volver al inicio</Link>
        </div>
      </>
    )

  );
};
