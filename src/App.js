import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div className="wrapper clear">

      <div className="overlay">
        <div className="drawer">
        <div>
          <h2 className="mb-30">
            <span>Корзина</span> 
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
          </h2>
          <div className="items">
            
            <div className="cartItem d-flex align-center mb-20">
              <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg "></div>
              <div className="mr-20 flex">
                <p className="mb-5">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
            </div> 

            <div className="cartItem d-flex align-center">
              <div style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }} className="cartItemImg "></div>
              <div className="mr-20 flex">
                <p className="mb-5">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
            </div> 
          </div>

      </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              <span>Оформить заказ</span> 
              <img src="/img/arrow-right.svg" alt="Order"/>
            </button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img width='40' height='40' src="/img/logo.png" alt="logo"/>
          <div>
            <h3 className="">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img width='18' height='18' src="/img/cart.svg" alt="cart"/> 
            <span>1205 rub.</span>
          </li>
          <li>
            <img width='18' height='18' src="/img/user.svg" alt="user"/> 
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex"> 
            <img src="/img/search.svg" alt="search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="sneakers d-flex justify-between">

          <Card />
          <Card />
          <Card />
          <Card />


        </div>


      </div>
    </div>
  );
}
 
export default App;
