import React from 'react';

import './styles.scss';

function Component({ rarityGroup, image, skinType, skinName }) {
  return (
    <div className={`items-item rarity-group-${rarityGroup}`}>
      <div className="item__case-hover">
        <img
          className="item__case-hover-image"
          src="https://ggdrop.gg/public/storage/cases/nAno5KEdwirmqwWegLv31UZJxDHMl0ErOgQWLl4h.png"
          alt="skin"
        />
      </div>

      <div className="item-header">
        <div className="item-title">
          <div className="item-price">359 ₽</div>
          <div className="item-sell">Продано</div>
        </div>
      </div>

      <div className="item-body">
        <img src={image} alt="skin" />
      </div>

      <div className="item-footer">
        <div className="item-title">
          <div className="sub-title">{skinType}</div>
          <div className="title">{skinName}</div>
        </div>
      </div>

      <div className="border" />
    </div>
  );
}

Component.defaultProps = {};

Component.propTypes = {};

export const InventoryItem = React.memo(Component);
