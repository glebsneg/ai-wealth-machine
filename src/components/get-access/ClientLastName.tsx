"use client"

import { useEffect, useState } from "react";

export default function ClientLastName() {
    const [lastName, setLastName] = useState<string>("");

    useEffect(() => {
        const ln = document?.body?.dataset?.lastName ?? "";
        setLastName(ln);
    }, []);

    return <>{lastName}</>;
}