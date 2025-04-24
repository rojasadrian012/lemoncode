import React from "react";
import { generatePath, Link } from "react-router-dom";
import { useMembersContext } from "../../providers";
import { Box, Input, Pagination, Typography } from "@mui/material";
import styles from "./list.module.css";
import { Header } from '../../components/header';
import { routes } from "../../routes";

export const ListPage: React.FC = () => {
  const { members, setSlug, setPagination, pagination } = useMembersContext()
  const updatePage = (page: number) => {
    setPagination((prev) => ({
      ...prev,
      page: page,
    }))
  }

  return (
    <>
      <Typography component="h1" variant="h4" align="center">
        Lista de usuarios <Typography component="span" variant="h4" color="primary">GitHub</Typography>
      </Typography>
      <div className={styles.centerContent}>
        <Input
          type="text"
          placeholder="lemoncode"
          onChange={(e) =>
            setSlug(e.target.value == "" ? "lemoncode" : e.target.value)
          }
          className={styles.input}
        />
      </div>
      <div className={styles.listUserListContainer}>
        <Header title="Foto" />
        <Header title="Identificador" />
        <Header title="Nombre" />
        <Header title="Perfil en Github" />

        {members.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/${generatePath(routes.gitHubDetail, { id: member.login })}`}>{member.login}</Link>
            <a href={member.html_url} target="_blank">{member.html_url}</a>
          </React.Fragment>
        ))}
      </div>
      <div className={styles.centerContent}>
        <Pagination
          sx={{
            marginTop: 2,
          }}
          count={pagination.totalCount}
          page={pagination.page}
          onChange={(e, value) => updatePage(value)}
          boundaryCount={2}
          siblingCount={pagination.page < 4 ? 0 : 3}
        />
      </div>
    </>
  );
};
