import './App.css';
import { useQuery } from 'react-query';
import CryptoBlock from './components/CryptoBlock';
import Aside from './components/Aside';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { toggleMenu } from './store/slices/coins';
import { useAppSelector, useAppDispatch } from './store/hook';

function App() {
  const { isLoading, data, error } = useQuery('repoData', () =>
    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': '53a1f79b-05c2-48ee-8f51-202e2e79aa2e'
      }
    }).then(res =>
      res.json()
    )
  )

  const dispatcher = useAppDispatch()
  const { selected, menuToggled } = useAppSelector(store => store.coins)

  const handleToggle = () => {
    dispatcher(toggleMenu(!menuToggled))
  }

  if (isLoading) return <div>
    'Loading...'
  </div>

  if (error) {
    return <div>
      {JSON.stringify(error)}
    </div>
  }

  return (
    <>

      {menuToggled && <Aside asMenu data={data?.data} />}

      <div className='wrapper'>

        <Aside data={data?.data.slice(0, 10)} />

        <div className='main'>
          <header>

            <img src={`https://img.freepik.com/free-vector/money_53876-25503.jpg?size=626&ext=jpg&ga=GA1.2.873814693.1660990519&semt=ais`} alt="" />
            <h3>My Cryptos</h3>

            <button onClick={handleToggle} className='hamburger-btn'><HiOutlineMenuAlt3 size={28} color='gray' /></button>

          </header>

          <main>

            {selected.map((coin: any) => {
              return <CryptoBlock key={coin.name} {...{
                buy: parseFloat(coin.quote.USD.price).toFixed(2).toString(),
                sell: parseFloat(coin.quote.USD.price).toFixed(2).toString(),
                price: parseFloat(coin.quote.USD.price).toFixed(2).toString(),
                change: parseFloat(coin.quote.USD.percent_change_24h).toFixed(2).toString(),
                name: coin.name,
                symbol: coin.symbol,
              }} />
            })}

            {selected.length === 0 && <div className='data-not-found'>Please select Cryptos from the menu to view!</div>}


          </main>
        </div>
      </div>

    </>
  );
}

export default App;
