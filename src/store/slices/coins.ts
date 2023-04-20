import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface coin {
    circulating_supply: number;
    cmc_rank: number;
    date_added: string;
    id: number;
    infinite_supply: boolean;
    last_updated: string;
    max_supply: number;
    name: string;
    num_market_pairs: number;
    platform: null;
    quote: {
        USD: {
            fully_diluted_market_cap: number;
            last_updated: string;
            market_cap: number;
            market_cap_dominance: number;
            percent_change_1h: number;
            percent_change_7d: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_60d: number;
            percent_change_90d: number;
            price: number;
            tvl: null;
            volume_24h: number;
            volume_change_24h: number;
        };
    };
    self_reported_circulating_supply: null;
    self_reported_market_cap: null;
    slug: string;
    symbol: string;
    tags: string[];
    total_supply: number;
    tvl_ratio: null;
}


interface coinsState {
    selected: coin[],
    search: string,
    menuToggled: boolean
}


const initialState: coinsState = {
    selected: [],
    search: '',
    menuToggled: false
}

export const coinSlice = createSlice({
    name: 'coin',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<coin>) => {
            const isAlreadyPresent = state.selected.filter((selectedCoin) => selectedCoin.id === action.payload.id).length === 1;
            if (!isAlreadyPresent) {
                state.selected = [...state.selected, action.payload]
            } else {
                state.selected = state.selected.filter((selectedCoin) => selectedCoin.id !== action.payload.id)
            }
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        toggleMenu: (state, action: PayloadAction<boolean>) => {
            state.menuToggled = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { add, setSearch, toggleMenu } = coinSlice.actions

export default coinSlice.reducer