import { Typography, Input, Pagination } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { Link, generatePath } from "react-router-dom";
import { Header } from "../../../components/header";
import { routes } from "../../../routes";
import styles from "./list.module.css";
import { Characters, defaulCharacters } from "../../../providers/character/interfaces/characters.model";
import { useCharactersContext } from "../../../providers/character";



export const CharactersListPage: React.FC = () => {

    const { characters, setPagination, pagination, setNameCharacter } = useCharactersContext(); 
    
    return (
        <>
            <Typography component="h1" variant="h4" align="center">
                Personajes de <Typography component="span" variant="h4" color="primary">Rick and Morty</Typography>
            </Typography>
            <div className={styles.centerContent}>
                <Input
                    type="text"
                    placeholder="Rick and Morty"
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
                        <a href={character.url} target="_blank">{character.url}</a>
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