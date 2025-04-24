export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface Pagination {
  limit: number;
  page: number;
  totalPages: number;
  count: number;
}

export const defaultPagination: Pagination = {
  limit: 5,
  page: 1,
  totalPages: 0,
  count: 0,
};
