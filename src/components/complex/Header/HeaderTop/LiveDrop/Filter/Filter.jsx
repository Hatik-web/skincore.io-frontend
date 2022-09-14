import React from 'react';

import './styles.scss';

function Filter() {
  return (
    <div className="live__buttons">
      <div className="live__btn-wrapper">
        {/* eslint-disable-next-line react/button-has-type */}
        <button className="live__btn live__btn--active">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.07203 1.31085C7.40793 0.474381 8.59207 0.47438 8.92797 1.31085L10.0937 4.2137C10.2367 4.56991 10.571 4.8128 10.954 4.83876L14.075 5.05038C14.9743 5.11136 15.3402 6.23755 14.6485 6.81549L12.248 8.82118C11.9534 9.06729 11.8257 9.46029 11.9194 9.83255L12.6825 12.8662C12.9024 13.7403 11.9445 14.4364 11.181 13.9571L8.53171 12.2938C8.20661 12.0897 7.79339 12.0897 7.46829 12.2938L4.81896 13.9571C4.05555 14.4364 3.09756 13.7403 3.31747 12.8662L4.08065 9.83255C4.1743 9.46029 4.0466 9.06729 3.75204 8.82118L1.35148 6.81549C0.659752 6.23755 1.02567 5.11136 1.925 5.05038L5.046 4.83876C5.42897 4.8128 5.76328 4.56991 5.90632 4.2137L7.07203 1.31085Z"
              fill="#5A5A5A"
            />
          </svg>
        </button>
      </div>
      <div className="live__btn-wrapper">
        {/* eslint-disable-next-line react/button-has-type */}
        <button className="live__btn">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="6.5625" height="6.5625" rx="2" fill="#FFCC15" />
            <rect x="8.4375" width="6.5625" height="6.5625" rx="2" fill="#FFCC15" />
            <rect y="8.4375" width="6.5625" height="6.5625" rx="2" fill="#FFCC15" />
            <rect x="8.4375" y="8.4375" width="6.5625" height="6.5625" rx="2" fill="#FFCC15" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Filter;
