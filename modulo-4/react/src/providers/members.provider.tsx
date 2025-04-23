import React from "react";
import { MemberEntity } from './member.model';


interface MembersContextModel {
    members: MemberEntity[];
    setSlug: (slug: string) => void;
}

export const MembersContext = React.createContext<MembersContextModel>(null)

export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [slug, setSlug] = React.useState<string>("lemoncode");

    React.useEffect(() => {
        const url = `https://api.github.com/orgs/${slug}/members`;
        fetch(url)
            .then((response) => response.json())
            .then((json) => setMembers(Array.isArray(json) ? json : []));
    }, [slug]);

    return (<MembersContext.Provider
        value={{
            members,
            setSlug,
        }}
    >
        {children}
    </MembersContext.Provider>)
}