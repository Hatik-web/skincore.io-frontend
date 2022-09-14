import React from 'react';

import { useSelector } from 'react-redux';
import { InventoryContent } from './InventoryContent';
import { selectAuth } from '../../store/auth/auth.slice';

function UserProfilePage() {
  // const [visible, setVisible] = useState(false);
  const { user } = useSelector(selectAuth);

  return (
    <div id="profile-page">
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
                            <div className="user__name">{user.username}</div>
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
                          <div className="user__balance">Пользователь</div>
                        </div>
                        <div className="user__buttons">
                          <div className="user__btn-wrapper">
                            <a
                              target="_blank"
                              href={user.profileUrl}
                              className="user__btn user__btn--refill"
                              rel="noreferrer"
                            >
                              Профиль в Steam
                              <svg width="24" height="24" viewBox="0 0 28 28">
                                <path
                                  d="M13.977 0C6.627 0 .597 5.67.027 12.875l7.502 3.103a3.955 3.955 0 012.233-.687c.072 0 .146.004.218.004l3.337-4.83v-.07a5.28 5.28 0 015.277-5.276 5.288 5.288 0 015.281 5.281 5.284 5.284 0 01-5.281 5.277h-.118l-4.758 3.395c0 .064.004.124.004.188a3.956 3.956 0 01-3.956 3.96 3.985 3.985 0 01-3.888-3.18L.51 17.814C2.174 23.694 7.565 28 13.977 28c7.73 0 13.996-6.266 13.996-14S21.707 0 13.978 0zM8.796 21.246l-1.719-.711a2.987 2.987 0 001.536 1.458A2.979 2.979 0 0012.5 20.39c.305-.738.305-1.54.004-2.274a2.94 2.94 0 00-1.61-1.613 2.957 2.957 0 00-2.187-.037l1.773.734a2.195 2.195 0 011.18 2.866 2.194 2.194 0 01-2.866 1.18zM22.112 10.39a3.522 3.522 0 00-3.514-3.519 3.517 3.517 0 100 7.037 3.52 3.52 0 003.514-3.518zm-6.147-.005a2.638 2.638 0 012.639-2.643 2.646 2.646 0 012.647 2.643 2.649 2.649 0 01-2.647 2.644 2.641 2.641 0 01-2.64-2.644z"
                                  fill="var(--color-primary)"
                                />
                              </svg>
                            </a>
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
                      <div className="best-drop__title">Любимый кейс</div>
                      <div className="best-drop__skin-info">
                        <div className="best-drop__skin-title">AK-47</div>
                        <div className="best-drop__skin-subtitle">Затерянная земля</div>
                      </div>
                      <div className="best-drop__price">63.25 ₽</div>
                    </div>
                    <div className="best-drop__skin best-drop__skin--milspec">
                      <div className="best-drop__image-wrapper">
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
            </div>
            <div className="orders">
              <InventoryContent
                items={[
                  {
                    key: 1,
                    rarity: 'blue',
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
                    rarity: 'blue',
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
                    rarity: 'blue',
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
                    rarity: 'blue',
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
                    rarity: 'blue',
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
                    rarity: 'blue',
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
                    rarity: 'blue',
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
                    rarity: 'blue',
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

export default UserProfilePage;
