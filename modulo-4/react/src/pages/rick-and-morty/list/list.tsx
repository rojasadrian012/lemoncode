import React from "react";
import { generatePath, Link } from "react-router-dom";

import { Typography, Input, Pagination } from "@mui/material";

import { Header } from "../../../components/header";
import styles from "./list.module.css";
import { useCharactersContext } from "../../../providers/character";
import { routes } from "../../../routes";

export const CharactersListPage: React.FC = () => {

    const { characters, setPagination, pagination, setNameCharacter, nameCharacter } = useCharactersContext();

    return (
        <>
            <Typography component="h1" variant="h4" align="center">
                Personajes de <Typography component="span" variant="h4" color="primary">Rick and Morty</Typography>
            </Typography>
            <div className={styles.centerContent}>
                <Input
                    type="text"
                    value={nameCharacter}
                    placeholder="Rick Sanchez"
                    onChange={(e) =>
                        setNameCharacter(e.target.value)
                    }
                    className={styles.input}
                />
            </div>
            <div className={styles.listUserListContainer}>
                <Header title="Foto" />
                <Header title="Identificador" />
                <Header title="Nombre" />
                <Header title="Especie" />
                <Header title="Estatus" />
                <Header title="Ver más" />

                {characters.results.map((character) => (
                    <React.Fragment key={character.id}>
                        <img src={character.image} />
                        <span>{character.id}</span>
                        <span>{character.name}</span>
                        <span>{character.species}</span>
                        <span>{character.status}</span>
                        <Link to={generatePath(`/${routes.rickAndMortyCharacterDetail}`, { id: character.id })}>{character.url}</Link>
                    </React.Fragment>
                ))}
            </div>
            <div className={styles.centerContent}>
                <Pagination
                    sx={{
                        marginTop: 2,
                    }}
                    count={characters.info.pages}
                    onChange={(e, value) => setPagination(prevState => ({
                        ...prevState,
                        page: value
                    }))}
                    boundaryCount={2}
                    siblingCount={pagination.page < 4 ? 0 : 3}
                />
            </div>
        </>
    );
}