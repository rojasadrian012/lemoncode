import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import { routes } from "../routes";
import { useLocation, useNavigate } from "react-router-dom";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const location = useLocation()

    React.useEffect(() => {
        if (location.pathname.includes("rick-and-morty")) {
            setValue(1);
        }else{
            setValue(0);
        }
    }, [])

    const handleNavigationChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        if (newValue === 0) {
            navigate(`/${routes.gitHubMembersList}`);
        } else if (newValue === 1) {
            navigate(`/${routes.rickAndMortyCharacterList}`);
        }
    };

    return (
        <>

            <BottomNavigation
                showLabels
                value={value}
                onChange={handleNavigationChange}
            >
                <BottomNavigationAction label="GitHub Miembros" />
                <BottomNavigationAction label="Rick And Morty" />
            </BottomNavigation>
            {children}

        </>
    );
};
