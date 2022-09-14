import React, { useState } from 'react';

import './styles.scss';
import { InventoryContent } from './InventoryContent';
import useModalState from '../../hooks/useModal';

function ProfilePage() {
  const [visible, setVisible] = useState(false);
  const { Modal, openModal } = useModalState();

  return (
    <div id="profile-page">
      <Modal />
      <section className="profile-section">
        <div className="container">
          <div className="profile">
            <div className="profile-header">
              <div className="profile-header__user">
                <div className="user">
                  <div className="user__inner">
                    <div className="user__top-content">
                      <div className="user__content">
                        <div className="user__photo-wrapper">
                          <img
                            width="50"
                            height="50"
                            className="user__photo"
                            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b1/b163673ea9a8fcea6fe22d6baad6d08ee4a5791e_full.jpg"
                            alt="neptyx.dev"
                          />
                        </div>
                        <div className="user__main-info">
                          <div className="user__name-wrapper">
                            <div className="user__name">Name</div>
                            <div className="user__steam-link-wrapper">
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="http://steamcommunity.com/profiles/76561199234332890"
                                className="user__steam-link"
                              >
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.431812 13.5621C1.09041 15.7151 2.42285 17.5999 4.23299 18.9389C6.04312 20.2779 8.23532 21.0004 10.4869 21C16.2934 21 21 16.2986 21 10.5C21 4.70138 16.2934 7.87217e-07 10.4882 7.87217e-07C7.82286 -0.00103029 5.25673 1.01083 3.30941 2.8307C1.36209 4.65057 0.179109 7.14245 0 9.80175L0.0039375 9.80963L5.65294 12.1314C6.16242 11.7941 6.76585 11.6273 7.37625 11.655L9.94875 7.92225L9.94744 7.86975C9.94848 6.81104 10.3694 5.79597 11.1179 5.04722C11.8664 4.29848 12.8814 3.8772 13.9401 3.87581C14.9988 3.8772 16.0137 4.29848 16.7622 5.04722C17.5107 5.79597 17.9316 6.81104 17.9327 7.86975C17.9323 8.40174 17.8257 8.92831 17.6193 9.41861C17.4128 9.90892 17.1107 10.3531 16.7304 10.7252C16.3502 11.0972 15.8995 11.3897 15.4048 11.5854C14.9101 11.7811 14.3814 11.8762 13.8495 11.865L10.1693 14.49C10.1817 14.9762 10.0725 15.4579 9.85137 15.8911C9.63027 16.3244 9.30438 16.6955 8.90332 16.9707C8.50226 17.2459 8.03876 17.4164 7.55499 17.4669C7.07121 17.5173 6.5825 17.446 6.13331 17.2594C5.70219 17.0797 5.32064 16.7989 5.02092 16.4407C4.7212 16.0825 4.5121 15.6574 4.41131 15.2014L0.433125 13.5621H0.431812Z"
                                    fill="#B0B1BA"
                                  />
                                  <path
                                    d="M6.38907 16.6465C6.9359 16.8552 7.54253 16.8427 8.08031 16.6117C8.6181 16.3806 9.04473 15.9492 9.26974 15.4089C9.49475 14.8685 9.50044 14.2618 9.28561 13.7173C9.07077 13.1729 8.6523 12.7335 8.11894 12.4924C7.59012 12.2718 6.9968 12.2624 6.46126 12.4662L7.80395 13.0227C8.00474 13.1063 8.18711 13.2286 8.34064 13.3827C8.49416 13.5367 8.61583 13.7195 8.69871 13.9206C8.78159 14.1217 8.82404 14.3372 8.82365 14.5547C8.82326 14.7722 8.78004 14.9875 8.69644 15.1883C8.61285 15.3891 8.49052 15.5715 8.33645 15.725C8.18238 15.8785 7.99957 16.0002 7.79848 16.0831C7.59738 16.1659 7.38193 16.2084 7.16442 16.208C6.94692 16.2076 6.73162 16.1644 6.53082 16.0808L5.23145 15.5427C5.46791 16.0405 5.88027 16.4333 6.38907 16.6452V16.6465ZM11.2794 7.86979C11.2798 8.57551 11.5601 9.25228 12.0589 9.75155C12.5577 10.2508 13.2342 10.5318 13.9399 10.5329C14.6456 10.5318 15.3221 10.2508 15.8209 9.75155C16.3196 9.25228 16.6 8.57551 16.6003 7.86979C16.5993 7.16452 16.3186 6.48843 15.8199 5.98972C15.3212 5.49102 14.6452 5.21039 13.9399 5.20935C13.2346 5.21039 12.5585 5.49102 12.0598 5.98972C11.5611 6.48843 11.2805 7.16452 11.2794 7.86979ZM13.9438 5.8656C14.2065 5.86577 14.4666 5.91768 14.7092 6.01836C14.9518 6.11904 15.1722 6.26653 15.3578 6.45239C15.5434 6.63825 15.6906 6.85885 15.791 7.1016C15.8914 7.34435 15.9429 7.60449 15.9428 7.86716C15.9426 8.12984 15.8907 8.38991 15.79 8.63253C15.6893 8.87514 15.5418 9.09555 15.356 9.28117C15.1701 9.46679 14.9495 9.61398 14.7068 9.71434C14.464 9.81471 14.2039 9.86627 13.9412 9.8661C13.4107 9.86575 12.9021 9.65468 12.5272 9.27931C12.1523 8.90395 11.9419 8.39504 11.9423 7.86454C11.9426 7.33404 12.1537 6.82541 12.529 6.45053C12.9044 6.07566 13.4133 5.86525 13.9438 5.8656Z"
                                    fill="#B0B1BA"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="user__balance">3000 ₽</div>
                        </div>
                        <div className="user__buttons">
                          <div className="user__btn-wrapper">
                            <button
                              className="user__btn user__btn--refill"
                              onClick={() => openModal('depositModal')}
                            >
                              <div>Пополнить</div>
                              <div>
                                <svg
                                  className="user__btn-icon"
                                  width="40"
                                  height="28"
                                  viewBox="0 0 40 28"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect width="34" height="27.0909" rx="5" fill="#274630" />
                                  <path
                                    d="M26.0003 12.2265C26.0003 11.6993 25.5586 11.272 25.0137 11.272H19.3635C18.8187 11.272 18.377 11.6993 18.377 12.2265V15.0901C18.377 15.6172 18.8187 16.0446 19.3635 16.0446H25.0137C25.5586 16.0446 26.0003 15.6172 26.0003 15.0901V12.2265ZM21.2034 14.7835C20.5683 14.7835 20.0534 14.2853 20.0534 13.6708C20.0534 13.0562 20.5683 12.5581 21.2034 12.5581C21.8386 12.5581 22.3535 13.0562 22.3535 13.6708C22.3535 14.2852 21.8386 14.7835 21.2034 14.7835Z"
                                    fill="#64CE82"
                                  />
                                  <path
                                    d="M17.0771 9.97048H24.3857V7.10692C24.3857 6.3892 23.8122 5.8053 23.0703 5.8053H7.37516C6.63337 5.8053 6 6.3892 6 7.10692V20.2967C6 21.0144 6.63337 21.5983 7.37516 21.5983H23.0703C23.8121 21.5983 24.3857 21.0144 24.3857 20.2967V17.3463H17.0904L17.0771 9.97048Z"
                                    fill="#64CE82"
                                  />
                                  <g filter="url(#filter0_b_28_2741)">
                                    <ellipse
                                      cx="34"
                                      cy="13.5454"
                                      rx="6"
                                      ry="5.8052"
                                      fill="#76F59A"
                                    />
                                  </g>
                                  <path
                                    d="M37.335 13.1487V14.4814H31V13.1487H37.335ZM34.9102 10.6429V17.153H33.4312V10.6429H34.9102Z"
                                    fill="white"
                                  />
                                  <defs>
                                    <filter
                                      id="filter0_b_28_2741"
                                      x="-6"
                                      y="-26.2598"
                                      width="80"
                                      height="79.6104"
                                      filterUnits="userSpaceOnUse"
                                      colorInterpolationFilters="sRGB"
                                    >
                                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                      <feGaussianBlur in="BackgroundImage" stdDeviation="17" />
                                      <feComposite
                                        in2="SourceAlpha"
                                        operator="in"
                                        result="effect1_backgroundBlur_28_2741"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_backgroundBlur_28_2741"
                                        result="shape"
                                      />
                                    </filter>
                                  </defs>
                                </svg>
                              </div>
                            </button>
                          </div>
                          <div className="user__btn-wrapper">
                            <button
                              onClick={() => setVisible((prevState) => !prevState)}
                              className="user__btn user__btn--trade user__btn--trade-new"
                            >
                              <div>Трейд ссылка</div>
                              <div>
                                <svg
                                  className="user__btn_trade-icon"
                                  width="25"
                                  height="25"
                                  viewBox="0 0 25 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M23.725 11.2569H23.7C23.575 10.1074 23.2749 9.008 22.8249 7.98351H22.85C23.45 7.62119 23.65 6.85907 23.3125 6.25937C22.975 5.65967 22.2 5.45977 21.6 5.7971H21.5749C20.8999 4.89755 20.0875 4.09796 19.175 3.4233V3.38582C19.5375 2.78612 19.3375 2.02398 18.7375 1.67416C18.1375 1.32433 17.375 1.53674 17.025 2.13644V2.16141C15.9875 1.71164 14.8875 1.41179 13.7375 1.28686V1.24938C13.7375 0.562219 13.175 0 12.4875 0C11.8 0 11.2375 0.562219 11.2375 1.24938V1.29934C10.0875 1.42428 8.98751 1.73663 7.97501 2.18641L7.94998 2.13644C7.59998 1.53674 6.83749 1.33683 6.23749 1.67416C5.63749 2.02398 5.43749 2.78612 5.77499 3.38582L5.81245 3.44827C4.89995 4.12293 4.1 4.92254 3.4375 5.83458L3.37494 5.7971C2.77494 5.44728 2.01244 5.65967 1.66245 6.25937C1.31245 6.85907 1.52494 7.6212 2.12494 7.97102L2.1875 8.0085C1.75 9.0205 1.45 10.1199 1.325 11.2569H1.25C0.5625 11.2569 0 11.8191 0 12.5062C0 13.1934 0.5625 13.7556 1.25 13.7556H1.325C1.45 14.905 1.74994 15.992 2.19994 17.004L2.12494 17.0415C1.52494 17.3913 1.32496 18.1534 1.67496 18.7531C1.89996 19.1529 2.32495 19.3778 2.76245 19.3778C2.97495 19.3778 3.18745 19.3278 3.38745 19.2154L3.46245 19.1654C4.12495 20.065 4.92498 20.8646 5.83748 21.5392L5.78751 21.6142C5.43751 22.2139 5.65 22.976 6.25 23.3258C6.45 23.4383 6.6625 23.4883 6.875 23.4883C7.3125 23.4883 7.72499 23.2634 7.96249 22.8636L7.99995 22.8011C9.01245 23.2509 10.1 23.5507 11.25 23.6757V23.7506C11.25 24.4378 11.8125 25 12.5 25C13.1875 25 13.75 24.4378 13.75 23.7506V23.6882C14.9 23.5632 15.9875 23.2634 17.0125 22.8261L17.0375 22.8761C17.275 23.2759 17.6875 23.5008 18.125 23.5008C18.3375 23.5008 18.55 23.4508 18.75 23.3383C19.35 22.9885 19.55 22.2264 19.2125 21.6267L19.1875 21.5767C20.1 20.9021 20.8999 20.1025 21.5749 19.1904L21.625 19.2154C21.825 19.3278 22.0375 19.3778 22.25 19.3778C22.6875 19.3778 23.1 19.1529 23.3375 18.7531C23.6875 18.1534 23.475 17.3913 22.875 17.0415H22.8374C23.2874 16.0045 23.5875 14.905 23.725 13.7556H23.75C24.4375 13.7556 25 13.1934 25 12.5062C25 11.8191 24.4375 11.2569 23.75 11.2569H23.725ZM12.5124 21.2519C9.66244 21.2519 7.13749 19.8776 5.53749 17.7661L12.5 13.9305L19.3625 17.941C17.75 19.9525 15.2874 21.2519 12.5124 21.2519ZM11.2624 3.83559V11.7566L4.32495 15.5797C3.96245 14.6177 3.75 13.5807 3.75 12.4938C3.75 8.09595 7.02494 4.44779 11.2624 3.83559ZM21.2749 12.4938C21.2749 13.6557 21.0375 14.7676 20.625 15.7921L13.7624 11.7816V3.83559C17.9999 4.44779 21.2749 8.08346 21.2749 12.4938Z"
                                    fill="#B47452"
                                  />
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className={`user__trade-form visible-${visible}`}>
                        <div className="trade-link__header">
                          <div className="trade-link__header-main">
                            <div className="trade-link__title">ТРЕЙД-ССЫЛКА</div>
                            <div className="trade-link__where-get">
                              <a
                                href="http://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url"
                                target="_blank"
                                rel="noreferrer"
                                className="trade-link__where-get-link"
                              >
                                Где получить?
                              </a>
                            </div>
                          </div>
                          <div className="trade-link__swindlers-wrapper" />
                        </div>
                        <div className="trade-link__content">
                          <div className="trade-link__input-wrapper">
                            <input className="trade-link__input" type="text" />
                          </div>
                          <div className="trade-link__btn-wrapper">
                            <button className="trade-link__btn">Сохранить</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-header__info">
                <div className="profile-header__additional">
                  <div className="favorite-case">
                    <div className="favorite-case__info">
                      <div className="favorite-case__title">Любимый кейс</div>
                      <div className="favorite-case__content">GGМороз</div>

                      <div className="favorite-case__btn-wrapper">
                        <a className="favorite-case__btn" href="/case/ggfrost">
                          Открыть
                        </a>
                      </div>
                    </div>
                    <div className="favorite-case__case">
                      <img
                        className="favorite-case__case-image"
                        width="135"
                        src="https://ggdrop.gg/public/storage/cases/nAno5KEdwirmqwWegLv31UZJxDHMl0ErOgQWLl4h.png"
                        alt="Любимый кейс"
                      />
                    </div>
                  </div>
                </div>
                <div className="profile-header__additional">
                  <div className="best-drop">
                    <div className="best-drop__info">
                      <div className="best-drop__title">Лучший дроп</div>
                      <div className="best-drop__skin-info">
                        <div className="best-drop__skin-title">AK-47</div>
                        <div className="best-drop__skin-subtitle">Затерянная земля</div>
                      </div>
                      <div className="best-drop__price">63.25 ₽</div>
                    </div>
                    <div className="best-drop__skin best-drop__skin--milspec">
                      <div className="best-drop__image-wrapper rarity-group-Contraband">
                        <img
                          className="best-drop__image"
                          width="135"
                          src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092sgIWIqP_xMq3IqWdQ-sJ0xLyUp9Tx2VLj8xFvYDuhLdDGdANoaQrUqFDqx-q-1Ja1up3MnHo3u3Y8pSGKFkdG0Rc/190fx142f"
                          alt="Любимый кейс"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-tabs">
              <ul className="user-tabs__list">
                <li className="user-tabs__item">
                  <button className="user-tabs__btn user-tabs__btn--active">
                    <div className="user-tabs__btn-inner">
                      <div className="user-tabs__btn-icon">
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m21.5585 8.4868-8.0291 5.0115c-.3232.2022-.7299.2022-1.0636 0l-8.029-5.0115c-.5735-.3596-.7195-1.2023-.2815-1.7304.3023-.3708.6465-.6742 1.0114-.8877l5.6516-3.371c1.2096-.7303 3.1699-.7303 4.3795 0l5.6516 3.371c.365.2135.7091.528 1.0115.8877.4171.528.2711 1.3708-.3024 1.7304ZM14.3 16.3495v6.6202c0 .7945.7616 1.3171 1.4342.9722 2.0376-1.0558 5.4699-3.0314 5.4699-3.0314 1.2067-.7212 2.1959-2.54 2.1959-4.0347v-4.8851c0-.8258-.821-1.3484-1.4936-.9408l-7.1119 4.3589c-.2967.1986-.4945.554-.4945.9407Zm-2.6 6.6202v-6.7198c0-.3867-.1979-.7421-.4946-.9407l-7.1118-4.3588c-.6727-.4077-1.4936.1149-1.4936.9407v4.9847c0 1.4947.9891 3.3135 2.1958 4.0347 0 0 3.4323 1.9756 5.4699 3.0314.6726.3449 1.4343-.1777 1.4343-.9722Z"
                            fill="#484A55"
                          />
                        </svg>
                      </div>
                      <div className="user-tabs__btn-txt">Предметы</div>
                      <div className="user-tabs__count">9</div>
                    </div>
                  </button>
                  <button className="user-tabs__btn">
                    <div className="user-tabs__btn-inner">
                      <div className="user-tabs__btn-icon">
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="m21.5585 8.4868-8.0291 5.0115c-.3232.2022-.7299.2022-1.0636 0l-8.029-5.0115c-.5735-.3596-.7195-1.2023-.2815-1.7304.3023-.3708.6465-.6742 1.0114-.8877l5.6516-3.371c1.2096-.7303 3.1699-.7303 4.3795 0l5.6516 3.371c.365.2135.7091.528 1.0115.8877.4171.528.2711 1.3708-.3024 1.7304ZM14.3 16.3495v6.6202c0 .7945.7616 1.3171 1.4342.9722 2.0376-1.0558 5.4699-3.0314 5.4699-3.0314 1.2067-.7212 2.1959-2.54 2.1959-4.0347v-4.8851c0-.8258-.821-1.3484-1.4936-.9408l-7.1119 4.3589c-.2967.1986-.4945.554-.4945.9407Zm-2.6 6.6202v-6.7198c0-.3867-.1979-.7421-.4946-.9407l-7.1118-4.3588c-.6727-.4077-1.4936.1149-1.4936.9407v4.9847c0 1.4947.9891 3.3135 2.1958 4.0347 0 0 3.4323 1.9756 5.4699 3.0314.6726.3449 1.4343-.1777 1.4343-.9722Z"
                            fill="#484A55"
                          />
                        </svg>
                      </div>
                      <div className="user-tabs__btn-txt">Апгрейд</div>
                      <div className="user-tabs__count">1</div>
                    </div>
                  </button>
                </li>
              </ul>
              <div className="user-tabs__additional">
                <div className="user-tabs__available">
                  Доступно для продажи
                  <div className="user-tabs__available-toggle" />
                  <div className="user-tabs__sell-btn-wrapper">
                    <button className="user-tabs__sell-btn">Продать все</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="orders">
              <InventoryContent
                items={[
                  {
                    key: 1,
                    rarity: 'blue',
                    rarityGroup: 'ConsumerGrade',
                    price: 300,
                    image:
                      'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5c6jh7-HnvD8J_WBxjgBv8Mp27HFod6gjA3gqBFkNm2mcdLEc1M8Zl7Z8we5wO2515K5ot2XnsjoWXP9/150fx112f',
                    exterior: '',
                    skinName: 'Neptyx',
                    skinType: 'AWP',
                    isSouvenir: false,
                    isStatTrak: true,
                    skinChance: 30
                  },
                  {
                    key: 1,
                    rarity: 'red',
                    rarityGroup: 'IndustrialGrade',
                    price: 300,
                    image:
                      'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5c6jh7-HnvD8J_WBxjgBv8Mp27HFod6gjA3gqBFkNm2mcdLEc1M8Zl7Z8we5wO2515K5ot2XnsjoWXP9/150fx112f',
                    exterior: '',
                    skinName: 'Neptyx',
                    skinType: 'AWP',
                    isSouvenir: false,
                    isStatTrak: true,
                    skinChance: 30
                  },
                  {
                    key: 1,
                    rarity: 'pink',
                    rarityGroup: 'MilSpec',
                    price: 300,
                    image:
                      'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5c6jh7-HnvD8J_WBxjgBv8Mp27HFod6gjA3gqBFkNm2mcdLEc1M8Zl7Z8we5wO2515K5ot2XnsjoWXP9/150fx112f',
                    exterior: '',
                    skinName: 'Neptyx',
                    skinType: 'AWP',
                    isSouvenir: false,
                    isStatTrak: true,
                    skinChance: 30
                  },
                  {
                    key: 1,
                    rarity: 'yellow',
                    rarityGroup: 'Restricted',
                    price: 300,
                    image:
                      'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5c6jh7-HnvD8J_WBxjgBv8Mp27HFod6gjA3gqBFkNm2mcdLEc1M8Zl7Z8we5wO2515K5ot2XnsjoWXP9/150fx112f',
                    exterior: '',
                    skinName: 'Neptyx',
                    skinType: 'AWP',
                    isSouvenir: false,
                    isStatTrak: true,
                    skinChance: 30
                  },
                  {
                    key: 1,
                    rarity: 'purple',
                    rarityGroup: 'Classified',
                    price: 300,
                    image:
                      'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5c6jh7-HnvD8J_WBxjgBv8Mp27HFod6gjA3gqBFkNm2mcdLEc1M8Zl7Z8we5wO2515K5ot2XnsjoWXP9/150fx112f',
                    exterior: '',
                    skinName: 'Neptyx',
                    skinType: 'AWP',
                    isSouvenir: false,
                    isStatTrak: true,
                    skinChance: 30
                  },
                  {
                    key: 1,
                    rarity: 'white',
                    rarityGroup: 'Covert',
                    price: 300,
                    image:
                      'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5c6jh7-HnvD8J_WBxjgBv8Mp27HFod6gjA3gqBFkNm2mcdLEc1M8Zl7Z8we5wO2515K5ot2XnsjoWXP9/150fx112f',
                    exterior: '',
                    skinName: 'Neptyx',
                    skinType: 'AWP',
                    isSouvenir: false,
                    isStatTrak: true,
                    skinChance: 30
                  },
                  {
                    key: 1,
                    rarity: 'lightBlue',
                    rarityGroup: 'Contraband',
                    price: 300,
                    image:
                      'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5c6jh7-HnvD8J_WBxjgBv8Mp27HFod6gjA3gqBFkNm2mcdLEc1M8Zl7Z8we5wO2515K5ot2XnsjoWXP9/150fx112f',
                    exterior: '',
                    skinName: 'Neptyx',
                    skinType: 'AWP',
                    isSouvenir: false,
                    isStatTrak: true,
                    skinChance: 30
                  }
                ]}
                key={1}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
