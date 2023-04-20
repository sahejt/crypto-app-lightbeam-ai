import React from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

interface props2 {
    name: string,
    symbol: string,
    price: string,
    change: string,
    buy: string,
    sell: string
}

const CryptoBlock: React.FC<props2> = ({ name, symbol, price, change, buy, sell }) => {
    const isNegative = parseFloat(change) < 0;
    const conditionalClasses = `${!isNegative ? 'text-green' : 'text-red'}`
    const imageUrl = `/icons/${symbol.toLowerCase()}.png`
    const Icon = isNegative ? RiArrowDownSFill : RiArrowUpSFill
    return (
        <div className='currency-lg'>
            <div className='left'>
                <div>
                    <img src={imageUrl} alt="icon" />
                </div>
            </div>

            <div className='right'>

                <div className='one'>
                    <h3>{name}</h3>
                    <p>{symbol}</p>
                </div>

                <div className='two'>
                    <div>
                        <h1 className={conditionalClasses}>{price}</h1>
                        <span className={conditionalClasses}>({change}%)</span>
                        <Icon className={conditionalClasses} size={20} />
                    </div>
                    <p>CHANGE</p>
                </div>

                <div className='three'>
                    <div className='left'>
                        <h2>{buy}</h2>
                        <p>Buy</p>
                    </div>

                    <div className='line'></div>

                    <div className='right'>
                        <h2>{sell}</h2>
                        <p>Sell</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CryptoBlock