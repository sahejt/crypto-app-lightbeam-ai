import { useState, useEffect } from 'react';
import { type coin } from '../../store/slices/coins';
const useDebouncedSearch = (coins: coin[], delay: number) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState(coins);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFilteredItems(
                coins.filter((coin) =>
                    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }, delay);

        return () => clearTimeout(timer);
    }, [coins, searchTerm, delay]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return [filteredItems, handleSearch];
};
export default useDebouncedSearch