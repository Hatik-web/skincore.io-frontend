import React from 'react';

import './styles.scss';
import { NavLink } from 'react-router-dom';
import useModalState from '../../../../../hooks/useModal';

function Profile() {
  const { user } = {};
  const { Modal, openModal } = useModalState();

  return (
    <div id="profile">
      <Modal />
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="profile_money" onClick={() => openModal('depositModal')}>
        <svg
          width="40"
          height="28"
          viewBox="0 0 40 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="34" height="28" rx="5" fill="#46351E" />
          <path
            d="M26.0003 12.6368C26.0003 12.092 25.5586 11.6503 25.0137 11.6503H19.3635C18.8187 11.6503 18.377 12.092 18.377 12.6368V15.5965C18.377 16.1413 18.8187 16.583 19.3635 16.583H25.0137C25.5586 16.583 26.0003 16.1413 26.0003 15.5965V12.6368ZM21.2034 15.2796C20.5683 15.2796 20.0534 14.7647 20.0534 14.1296C20.0534 13.4944 20.5683 12.9795 21.2034 12.9795C21.8386 12.9795 22.3535 13.4944 22.3535 14.1296C22.3535 14.7646 21.8386 15.2796 21.2034 15.2796Z"
            fill="#E4AE39"
          />
          <path
            d="M17.0771 10.3049H24.3857V7.3453C24.3857 6.6035 23.8122 6 23.0703 6H7.37516C6.63337 6 6 6.6035 6 7.3453V20.9776C6 21.7194 6.63337 22.3229 7.37516 22.3229H23.0703C23.8121 22.3229 24.3857 21.7194 24.3857 20.9776V17.9283H17.0904L17.0771 10.3049Z"
            fill="#E4AE39"
          />
          <g filter="url(#filter0_b_35_337)">
            <circle cx="34" cy="14" r="6" fill="#E4AE39" fillOpacity="0.24" />
          </g>
          <path
            d="M37.335 13.5898V14.9673H31V13.5898H37.335ZM34.9102 11V17.7285H33.4312V11H34.9102Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_b_35_337"
              x="-6"
              y="-26"
              width="80"
              height="80"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="17" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_35_337" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_35_337"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <NavLink className="profile-link" to="/profile">
        <div className="profile_user-info">
          <strong>{user.username}</strong>
          <div className="profile_balance">0 ₽</div>
        </div>
        <div className="profile_avatar__block">
          <img alt="-avatar" />
        </div>
      </NavLink>
    </div>
  );
}

export default Profile;
