import React from "react";
import { Link } from "react-router-dom";
import { useMembersContext } from "./providers";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const { members, setSlug } = useMembersContext()

  return (
    <>
      <h2>Hello from List page</h2>{" "}
      <input
        type="text"
        placeholder="lemoncode"
        onChange={(e) => setSlug(e.target.value)}
      />
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
