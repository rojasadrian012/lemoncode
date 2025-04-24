import React from "react";

import { Character, Characters, defaulCharacters, defaultPagination, Pagination } from "./interfaces";
import { getCharacters } from "./api";



interface CharactersContextModel {
    characters: Characters;
    pagination: Pagination;
    setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
    // setSlug: (slug: string) => void;
    // pagination: Pagination;
}

export const CharactersContext = React.createContext<CharactersContextModel>(null);

export const CharacterProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

    const [characters, setCharacters] = React.useState<Characters>(defaulCharacters);
    const [pagination, setPagination] = React.useState<Pagination>(defaultPagination)

    // const [slug, setSlug] = React.useState<string>("lemoncode");

    React.useEffect(() => {
        getCharacters(pagination.page)
            .then(response => setCharacters(response)
            )

    }, [pagination]);

    return (
        <CharactersContext.Provider
            value={{
                characters,
                setPagination,
                pagination
            }}
        >
            {children}
        </CharactersContext.Provider>
    );
};
