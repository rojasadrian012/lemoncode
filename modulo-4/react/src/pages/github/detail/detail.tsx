import React from "react";
import { Link, useParams } from "react-router-dom";

import { Typography } from "@mui/material";

import styles from "./detail.module.css";
import { routes } from "../../../routes";
import { defaultMember, Member } from "./interfaces";


export const MemberDetailPage: React.FC = () => {
  const { id } = useParams();
  const [member, setMember] = React.useState<Member>(defaultMember);

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`).
      then(response => response.json()).
      then(data => {
        const updatedMember: Member = {
          ...data,
          created_at: new Date(data.created_at),
          updated_at: new Date(data.updated_at),
        }
        setMember(updatedMember);
      })
  }, [])

  return (
    <>
      <Typography component="h1" variant="h4" align="center">
        Detalles del usuario <Typography component="span" variant="h4" color="primary">{member.login}</Typography>
      </Typography>

      <div className={styles.imageContainer}>
        <img src={member.avatar_url} alt={`foto de ${member.login}`} />
      </div>
      <div className={styles.infoContainer}>
        <div>
          <p>Fecha de creación de la cuenta:
            <span>{" "}{member.created_at.toLocaleDateString()}</span>
          </p>

          <p>Cantidad de Seguidores:
            <span>{" "}{member.followers}</span>
          </p>
        </div>
        <div>
          <p>Cantidad de usuarios a los que sigue:
            <span>{" "}{member.following}</span>
          </p>

          <p>Repositorios publicos:</p>
          <a href={member.repos_url} target="_blank">{member.repos_url}</a>
        </div>

      </div>

      <div className={styles.footer}>
        <Link to={`/${routes.gitHubMembersList}`}>Volver al inicio</Link>
      </div>
    </>
  );
};
