import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { useResultContext } from "../contexts/ResultContextProvider";

import { Links } from "./Links";

export const Search = () => {
    const [text, setText] = useState('Elon Musk');
    const { setSearchTerm } = useResultContext();
    const [debouncedValue] = useDebounce(text, 300);

    useEffect(() => {

    }, [debouncedValue])
    return (
        <div>
            <h1>Search</h1>
            <Links />
        </div>
    );
}