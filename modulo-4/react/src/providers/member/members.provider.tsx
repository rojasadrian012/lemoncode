import React from "react";
import { defaultPagination, MemberEntity, Pagination } from "./member.model";
import { useDebounce } from "use-debounce";

interface MembersContextModel {
    members: MemberEntity[];
    slug: string;
    setSlug: (slug: string) => void;
    setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
    pagination: Pagination;
}

export const MembersContext = React.createContext<MembersContextModel>(null);

export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [slug, setSlug] = React.useState<string>("lemoncode");
    const [pagination, setPagination] = React.useState<Pagination>(defaultPagination)
    const [debouncedText] = useDebounce(slug, 1500);

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
                    const total = lastPage * pagination.limit;
                    const newTotalCount = total / pagination.limit;

                    setPagination(prevState => {
                        if (prevState.totalPages === newTotalCount) {
                            return prevState;
                        }
                        return {
                            ...prevState,
                            totalPages: newTotalCount,
                            count: total,
                        };
                    });
                }
            } else {
                setPagination(prevState => ({
                    ...prevState,
                    totalPages: 0,
                })
                )
            }
        };

        fetchMembers()

    }, [debouncedText, pagination.page, pagination.limit]);

    return (
        <MembersContext.Provider
            value={{
                members,
                setSlug,
                setPagination,
                pagination,
                slug,
            }}
        >
            {children}
        </MembersContext.Provider>
    );
};
