import { Box } from "@mui/material";
import React from "react";

export const Header: React.FC<{ title: string }> = ({ title }) => {
    return (
        <Box
            sx={{
                borderRadius: 1,
                bgcolor: 'primary.main',
                '&:hover': {
                    bgcolor: 'primary.dark',
                },
                p: 2,
                fontWeight: 'bold',
                color: "white"
            }}
        >
            {title}
        </Box>
    );
}