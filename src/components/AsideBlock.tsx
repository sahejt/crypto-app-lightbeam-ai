import { useAppDispatch } from "../store/hook"
import { add } from "../store/slices/coins"
import { type coin } from "../store/slices/coins"
interface props {
    data: coin,
    selected: boolean
}


const AsideBlock: React.FC<props> = ({ data, selected }) => {
    const dispatcher = useAppDispatch()
    const imageUrl = `/icons/${data.symbol.toLowerCase()}.png`

    const handleClick = () => {
        dispatcher(add(data))
    }

    return (
        <div onClick={handleClick} className={`currency-sm ${selected ? 'selected-sm' : ''}`}>
            <div className='container'>
                <div className='left'>
                    <img src={imageUrl} alt='currency' />
                </div>
                <div className='right'>
                    <h3>{data.symbol}</h3>
                    <p>{data.name}</p>
                </div>
            </div>
        </div>
    )
}

export default AsideBlock