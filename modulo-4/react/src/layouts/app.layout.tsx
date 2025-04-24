import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import { routes } from "../routes";
import { useNavigate } from "react-router-dom";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    const handleNavigationChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(newValue);

        setValue(newValue);
        if (newValue === 0) {
            navigate(`/${routes.gitHubMembersList}`);
        } else if (newValue === 1) {
            navigate(`/${routes.rickAndMortyCharacterList}`);
        }
    };

    return (
        <>
            <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0, height: '100dvh' }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={handleNavigationChange}
                >
                    <BottomNavigationAction label="GitHub" />
                    <BottomNavigationAction label="Rick And Morty" />
                </BottomNavigation>
                {children}
            </Paper>
        </>
    );
};
