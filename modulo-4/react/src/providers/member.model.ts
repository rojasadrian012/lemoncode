export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
  html_url: string
}

export interface Pagination {
  limit: number;
  page: number;
}

export const defaultPagination: Pagination = {
  limit: 5,
  page: 1,
};

export interface TotalPagination {
  totalCount: number;
  halfTotal: number;
}
