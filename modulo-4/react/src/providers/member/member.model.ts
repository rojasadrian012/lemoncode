export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface Pagination {
  limit: number;
  page: number;
  totalCount: number;
}

export const defaultPagination: Pagination = {
  limit: 5,
  page: 1,
  totalCount: 0,
};
