import React from "react";
import { defaultPagination, MemberEntity, Pagination, TotalPagination } from "./member.model";

interface MembersContextModel {
    members: MemberEntity[];
    setSlug: (slug: string) => void;
    setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
    pagination: Pagination;
}

export const MembersContext = React.createContext<MembersContextModel>(null);

export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [slug, setSlug] = React.useState<string>("lemoncode");
    const [pagination, setPagination] = React.useState<Pagination>(defaultPagination)

    React.useEffect(() => {
        let timeoutId;

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
                    const total = lastPage * pagination.limit;
                    const newTotalCount = total / pagination.limit;

                    setPagination(prevState => {
                        if (prevState.totalCount === newTotalCount) {
                            return prevState; // No actualizar si el valor no ha cambiado
                        }
                        return {
                            ...prevState,
                            totalCount: newTotalCount,
                        };
                    });
                }
            } else {
                setPagination(prevState => ({
                    ...prevState,
                    totalCount: 0,
                })
                )
            }
        };

        timeoutId = setTimeout(fetchMembers, 2000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [slug, pagination.page, pagination.limit]);

    return (
        <MembersContext.Provider
            value={{
                members,
                setSlug,
                setPagination,
                pagination,
            }}
        >
            {children}
        </MembersContext.Provider>
    );
};
