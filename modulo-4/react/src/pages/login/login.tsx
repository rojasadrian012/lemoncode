import { Button, Card, FormLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { routes } from "../../routes";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate(routes.gitHubList);
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <div
      className={styles.container}
    >
      <form
        onSubmit={handleNavigation}
      >
        <Typography component="h1" variant="h4" align="center">
          Bienvenido
        </Typography>
        <Typography variant="subtitle1" align="center">
          Ingrese sus credenciales para continuar
        </Typography>

        <div>
          <FormLabel htmlFor="username">Usuario</FormLabel>
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            type="text"
            name="username"
            placeholder="johndoe"
            autoFocus
            required
            fullWidth
            variant="outlined"
          />
        </div>
        <div>
          <FormLabel htmlFor="password">Contraseña </FormLabel>
          <TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="••••••"
            id="password"
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="outlined"
          />
        </div>

        <Button fullWidth variant="contained" type="submit">Iniciar Sesión</Button>

      </form>
    </div>

  );
};
