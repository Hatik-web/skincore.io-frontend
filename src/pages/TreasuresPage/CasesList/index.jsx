import React from 'react';

import './styles.scss';
import { Link } from 'react-router-dom';

import box from './case.png';

function Component() {
  return (
    <section id="cases-category">
      <div className="title-case-category">
        Премиум кейсы
        {/* <span>ОТКРЫВАЙ БЕСПЛАТНО</span> */}
        <svg
          width="100"
          height="39"
          viewBox="0 0 100 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_26_60)">
            <path
              d="M16 16C16 19.866 19.134 23 23 23H77C80.866 23 84 19.866 84 16H16Z"
              fill="#FFCC15"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_26_60"
              x="0"
              y="0"
              width="100"
              height="39"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.8 0 0 0 0 0.0823529 0 0 0 0.25 0"
              />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_60" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_26_60"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="cases-list">
        <div className="case-card">
          <Link to="open-case">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="cases-link">
              <span className="cases_image-wrapper">
                <span className="cases__image-inner">
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  <img src={box} alt="No Image" />
                </span>
              </span>
              <span className="cases__name">Ножевой</span>
              <span className="cases_price-wrapper">
                <span className="cases__price">100 ₽</span>
                {/* eslint-disable-next-line max-len */}
                {/* {box.type === TypeBox.Free && <span className="cases__old-price">01: 30:45</span>} */}
              </span>
            </a>
          </Link>
        </div>
        <div className="case-card">
          <Link to="open-case">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="cases-link">
              <span className="cases_image-wrapper">
                <span className="cases__image-inner">
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  <img src={box} alt="No Image" />
                </span>
              </span>
              <span className="cases__name">Кейс</span>
              <span className="cases_price-wrapper">
                <span className="cases__price">100 ₽</span>
                {/* eslint-disable-next-line max-len */}
                {/* {box.type === TypeBox.Free && <span className="cases__old-price">01: 30:45</span>} */}
              </span>
            </a>
          </Link>
        </div>
        <div className="case-card">
          <Link to="open-case">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="cases-link">
              <span className="cases_image-wrapper">
                <span className="cases__image-inner">
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  <img src={box} alt="No Image" />
                </span>
              </span>
              <span className="cases__name">Кейс</span>
              <span className="cases_price-wrapper">
                <span className="cases__price">100 ₽</span>
                {/* eslint-disable-next-line max-len */}
                {/* {box.type === TypeBox.Free && <span className="cases__old-price">01: 30:45</span>} */}
              </span>
            </a>
          </Link>
        </div>
        <div className="case-card">
          <Link to="open-case">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="cases-link">
              <span className="cases_image-wrapper">
                <span className="cases__image-inner">
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  <img src={box} alt="No Image" />
                </span>
              </span>
              <span className="cases__name">Кейс</span>
              <span className="cases_price-wrapper">
                <span className="cases__price">100 ₽</span>
                {/* eslint-disable-next-line max-len */}
                {/* {box.type === TypeBox.Free && <span className="cases__old-price">01: 30:45</span>} */}
              </span>
            </a>
          </Link>
        </div>
        <div className="case-card">
          <Link to="open-case">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="cases-link">
              <span className="cases_image-wrapper">
                <span className="cases__image-inner">
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  <img src={box} alt="No Image" />
                </span>
              </span>
              <span className="cases__name">Кейс</span>
              <span className="cases_price-wrapper">
                <span className="cases__price">100 ₽</span>
                {/* eslint-disable-next-line max-len */}
                {/* {box.type === TypeBox.Free && <span className="cases__old-price">01: 30:45</span>} */}
              </span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Component;
