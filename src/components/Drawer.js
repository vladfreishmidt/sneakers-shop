import React from 'react';

const Drawer = () => {
  return (
    <div className="overlay" style={{ display: 'none' }}>
      <div className="drawer">
        <div>
          <h2 className="mb-30">
            <span>Корзина</span>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
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
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>

            <div className="cartItem d-flex align-center">
              <div style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }} className="cartItemImg "></div>
              <div className="mr-20 flex">
                <p className="mb-5">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
          </div>
        </div>
        <div>
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
            <img src="/img/arrow-right.svg" alt="Order" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;