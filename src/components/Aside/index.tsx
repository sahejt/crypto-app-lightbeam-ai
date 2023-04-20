import AsideBlock from '../AsideBlock'
import { BiSearch } from 'react-icons/bi'
import { SlArrowLeft } from 'react-icons/sl'
import { type coin } from '../../store/slices/coins'
import useDebouncedSearch from '../hooks/useDebounceSearch'
import { GrClose } from 'react-icons/gr';
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { toggleMenu } from '../../store/slices/coins';
interface props {
    data: coin[],
    asMenu?: boolean
}

const Aside: React.FC<props> = ({ data, asMenu }) => {


    const dispatcher = useAppDispatch()
    const { selected, menuToggled } = useAppSelector(store => store.coins)

    const handleToggle = () => {
        dispatcher(toggleMenu(!menuToggled))
    }

    const [filteredItems, handleSearch] = useDebouncedSearch(data, 500);

    return (
        <aside className={asMenu ? 'aside-menu' : 'aside'}>
            {!asMenu && <header>
                <SlArrowLeft className='Siarrow' /> Cryptos ({selected.length})
            </header>
            }

            {asMenu && <div className='menu-header'>
                <button onClick={handleToggle}><GrClose /></button>
            </div>
            }
            <div className='search-container'>
                <div className='search-inner'>
                    <BiSearch className='BiSearch' size={22} />
                    <input onChange={handleSearch as (event: React.ChangeEvent<HTMLInputElement>) => void} type="text" placeholder='Search' />
                </div>
            </div>

            <div className='comp-wrapper'>
                {(filteredItems as coin[]).map((coin: any) => {
                    const isSelected = selected.filter((c) => c.id === coin.id).length === 1
                    return <AsideBlock key={coin.name} selected={isSelected} data={coin} />
                })}

                {(filteredItems as coin[]).length === 0 && <div className='data-not-found'>no data found</div>}
            </div>
        </aside>
    )
}

export default Aside