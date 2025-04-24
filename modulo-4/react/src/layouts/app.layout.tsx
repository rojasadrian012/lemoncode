import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";


export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [value, setValue] = React.useState(0);

    return (
        <>
            <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0 , height: '100dvh'}}>

                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        console.log(newValue);
                    }}
                >
                    <BottomNavigationAction label="GitHub" />
                    <BottomNavigationAction label="Rick And Morty" />
                </BottomNavigation>
                {children}
            </Paper>
        </>

    )

}