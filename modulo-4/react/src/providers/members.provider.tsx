import React from "react";
import { defaultPagination, MemberEntity, Pagination, TotalPagination } from "./member.model";

interface MembersContextModel {
    members: MemberEntity[];
    setSlug: (slug: string) => void;
    setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
    pagination: Pagination;
    totalPagination: TotalPagination
}

export const MembersContext = React.createContext<MembersContextModel>(null);

export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [slug, setSlug] = React.useState<string>("lemoncode");
    const [pagination, setPagination] = React.useState<Pagination>(defaultPagination)
    const [totalPagination, setTotalPagination] = React.useState<TotalPagination>({ halfTotal: 0, totalCount: 0 });

    React.useEffect(() => {
        const fetchMembers = async () => {
            const url = `https://api.github.com/orgs/${slug}/members?per_page=${pagination.limit}&page=${pagination.page}`;
            const response = await fetch(url);
            const data = await response.json();

            setMembers(Array.isArray(data) ? data : []);

            const linkHeader = response.headers.get("Link");
            if (linkHeader) {
                const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
                if (match) {
                    const lastPage = parseInt(match[1], 10);
                    const total = lastPage * pagination.limit
                    setTotalPagination({
                        totalCount: total / pagination.limit,
                        halfTotal: Math.floor((total / pagination.limit) / 2),
                    });
                }
            } else {
                setTotalPagination({
                    totalCount: 0,
                    halfTotal: 0,
                })
            }
        };
        setTimeout(() => { //Debounce
            fetchMembers();
        }, 2000);
    }, [slug, pagination]);

    return (
        <MembersContext.Provider
            value={{
                members,
                setSlug,
                setPagination,
                pagination,
                totalPagination,
            }}
        >
            {children}
        </MembersContext.Provider>
    );
};
