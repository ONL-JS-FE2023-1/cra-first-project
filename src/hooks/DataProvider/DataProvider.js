/*

1. Хук - js функція (не клас)
2. Ім'я будь-якого хуку (в тому числі користувацького) починається з префіксу "use" (угода між розробника)
3. У користувацькому хуку ми можемо використовувати інші хуки

*/

import { useState, useEffect } from "react";

export function useData(loadData) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadData()
            .then((data) => {
                setData(data)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return {data, isLoading, error}
}