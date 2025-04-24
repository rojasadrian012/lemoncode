import React from "react";

import { Characters, defaulCharacters, defaultPagination, Pagination } from "./interfaces";
import { getCharactersByPage } from "./api";


interface CharactersContextModel {
    characters: Characters;
    pagination: Pagination;
    setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
    setNameCharacter: React.Dispatch<React.SetStateAction<string>>;
}

export const CharactersContext = React.createContext<CharactersContextModel>(null);

export const CharacterProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

    const [characters, setCharacters] = React.useState<Characters>(defaulCharacters);
    const [pagination, setPagination] = React.useState<Pagination>(defaultPagination)
    const [nameCharacter, setNameCharacter] = React.useState<string>("");

    React.useEffect(() => {
        getCharactersByPage(pagination.page, nameCharacter)
            .then(response => {
                if (!Array.isArray(response.results)) {
                    setCharacters(defaulCharacters);
                    return
                }
                setCharacters(response)
            }
            )
    }, [pagination, nameCharacter]);

    return (
        <CharactersContext.Provider
            value={{
                characters,
                setPagination,
                pagination,
                setNameCharacter,
            }}
        >
            {children}
        </CharactersContext.Provider>
    );
};
