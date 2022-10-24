import {AiOutlineShoppingCart, AiOutlinePlus} from 'react-icons/ai';
import {BsPersonCircle} from 'react-icons/bs';
import 'macro-css';


function App() {
  return (
    <div className="wrapper clear">
      <header className='d-flex justify-between align-center p-40'>
        <div className="d-flex align-center">
          <img src="/img/logo.png" width={80} height={80}/>
            <div>
              <h3 className='text-uppercase'> Product name</h3>
              <p className='opacity-5'>Shop name</p>
            </div>
        </div>


        <ul className="d-flex">
          <li className='mr-30'>
            <AiOutlineShoppingCart/>
            <span>
              Price
            </span>
          </li>
          <li>
            <BsPersonCircle/>
          </li>
        </ul>
      </header>

    <div className='products'>
    <div className="content p-40">
        <h1 className='mb-40'>All products</h1>

    <div className='d-flex'>
    <div className="card">
        <img width={133} height={112} src='/clothes/blouse.jpg'alt='blouse'/>
        <h5>Short sleeve pullover, recycled cotton</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
            <span>Price: </span>
            <b> 31.13 USD </b>
          </div>
            <button className='btn'>
              <AiOutlinePlus/>
            </button>
        </div>
      </div>

      <div className="card">
        <img width={133} height={112} src='/clothes/jacket.jpg'alt='jacket'/>
        <h5>Quilted jacket short, stand collar</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
            <span>Price: </span>
            <b> 74.17 USD </b>
          </div>
            <button className='btn'>
              <AiOutlinePlus/>
            </button>
        </div>
      </div>

      <div className="card">
        <img width={133} height={112} src='clothes/jeans.jpg'alt='jeans'/>
        <h5>High-waisted Jeans</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
            <span>Price: </span>
            <b> 42.26 USD </b>
          </div>
            <button className='btn'>
              <AiOutlinePlus/>
            </button>
        </div>
      </div>

      <div className="card">
        <img width={133} height={112} src='/clothes/sweater.jpg'alt='sweater'/>
        <h5>Pullover with round neck knitted melange with cashmere</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
            <span>Price: </span>
            <b> 219.85 USD </b>
          </div>
            <button className='btn'>
              <AiOutlinePlus/>
            </button>
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
  );
}

export default App;
