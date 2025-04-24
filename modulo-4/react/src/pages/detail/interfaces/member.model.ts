export interface Member {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

export const defaultMember: Member = {
  login: "",
  id: 0,
  avatar_url: "",
  html_url: "",
  repos_url: "",
  followers: 0,
  following: 0,
  created_at: new Date(),
  updated_at: new Date(),
};
