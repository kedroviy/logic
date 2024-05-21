import { ICourse } from 'core';
import { useMemo } from 'react';

export const useUniqueTags = (items: ICourse[]): string[] => {
    const uniqueTags = useMemo(() => {
        const allTags = items.flatMap(item => item.tags);
        return Array.from(new Set(allTags)).sort((a, b) => a.localeCompare(b));
    }, [items]);

    return uniqueTags;
};