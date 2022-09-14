import React from 'react';

import './styles.scss';

function Component({ closeModal }) {
  return (
    <div className="refill-window">
      <div className="refill-window__header">
        <div className="refill-window__title">Пополнение баланса</div>
        <button className="refill-window__close" onClick={() => closeModal()}>
          ×
        </button>
        <div className="refill-window__groups">
          <div className="refill-window__group-wrapper">
            <button className="refill-window__group-btn refill-window__group-btn--active">
              <span className="refill-window__group-text">Все</span>
            </button>
          </div>
          <div className="refill-window__group-wrapper">
            <button className="refill-window__group-btn">
              <span className="refill-window__group-text">Карты</span>
            </button>
          </div>
          <div className="refill-window__group-wrapper">
            <button className="refill-window__group-btn">
              <span className="refill-window__group-text">Эл. кошельки</span>
            </button>
          </div>
          <div className="refill-window__group-wrapper">
            <button className="refill-window__group-btn">
              <span className="refill-window__group-text">Скины</span>
            </button>
          </div>
          <div className="refill-window__group-wrapper">
            <button className="refill-window__group-btn">
              <span className="refill-window__group-text">Крипта</span>
            </button>
          </div>
        </div>
      </div>
      <div className="refill-window__footer">
        <div className="refill-window__content">
          <div className="refill-window__payments">
            <ul className="refill-window__payments-list">
              <li className="refill-window__payment">
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
              <li className="refill-window__payment">
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
              <li className="refill-window__payment">
                {/* eslint-disable-next-line react/button-has-type */}
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
              <li className="refill-window__payment">
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
              <li className="refill-window__payment">
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
              <li className="refill-window__payment">
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
              <li className="refill-window__payment">
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
              <li className="refill-window__payment">
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
              <li className="refill-window__payment">
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
              <li className="refill-window__payment">
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
              <li className="refill-window__payment">
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
              <li className="refill-window__payment">
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
              <li className="refill-window__payment">
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
              <li className="refill-window__payment">
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
              <li className="refill-window__payment">
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
              <li className="refill-window__payment">
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
              <li className="refill-window__payment">
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
              <li className="refill-window__payment">
                <button className="refill-window__payment-btn">
                  <img
                    className="refill-window__payment-icon"
                    src="https://ggdrop.io/static/media/settle-cards.45d5786d.svg"
                    alt=""
                  />
                  <div className="refill-window__payment-label">#1</div>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="refill-window__promo-wrapper">
          <div className="refill-window__content">
            <div className="refill-window__promo">
              <div className="refill-window__promo-input-wrapper">
                <input
                  placeholder="Сумма пополнения"
                  className="refill-window__amount-input"
                  autoComplete="off"
                  type="text"
                />
                <div className="refill-window__pre-input">₽</div>
                <div className="refill-window__promo-code">+25% К ПОПОЛНЕНИЮ ОТ 1000₽</div>
              </div>
              <div className="refill-window__promo-input-wrapper">
                <input
                  placeholder="Промокод"
                  className="refill-window__promo-input"
                  autoComplete="off"
                  type="text"
                />
                <div className="refill-window__promo-code">
                  <span className="refill-window__promo-code-label">ВАШ ПРОМОКОД: </span>
                  GDS12-JND23-MIEW1
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="refill-window__bonus">
          <span className="refill-window__bonus-text">Вы получите +7%</span>
        </div>
        <div className="refill-window__content">
          <div className="refill-window__payment-info">
            <div className="refill-window__button-wrapper">
              {/* eslint-disable-next-line react/button-has-type */}
              <button className="refill-window__button refill-window__button--disabled">
                пополнить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Component.defaultProps = {};

Component.propTypes = {};

export default React.memo(Component);
