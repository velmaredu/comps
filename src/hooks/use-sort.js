import { useState } from "react";

function useSort(data, config) {
    const [sortOrder, setShortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const setSortColumn = (label) => {
        if (sortBy && label !== sortBy) {
            setShortOrder('asc');
            setSortBy(label);
            return;
        }

        if (sortOrder === null) {
            setShortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setShortOrder('desc');
            setSortBy(label);
        } else {
            setShortOrder(null);
            setSortBy(null);
        }
    }

    let sortedData = data;
    if (sortBy && sortOrder) {
        const { sortValue } = config.find((column) => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        })
    }

    return {
        sortOrder,
        sortBy,
        sortedData,
        setSortColumn
    }
}

export default useSort;