import React, { useMemo } from 'react';

import './styles.scss';
import { TransitionGroup } from 'react-transition-group';
import { InventoryItem } from './InventoryItem';

const rarityToWorth = (rarity) => {
  switch (rarity) {
    case 'ConsumerGrade':
      return 0;
    case 'IndustrialGrade':
      return 1;
    case 'MilSpec':
      return 2;
    case 'Restricted':
      return 3;
    case 'Classified':
      return 4;
    case 'Covert':
      return 5;
    case 'Contraband':
      return 6;

    default:
      return 10;
  }
};

function Component({ items }) {
  const filteredItems = useMemo(
    () => items.sort((a, b) => rarityToWorth(a.rarityGroup) - rarityToWorth(b.rarityGroup)),
    [items]
  );

  return (
    <div className="case__contains-wrapper">
      <div className="container">
        <TransitionGroup appear className="treasure-content">
          {filteredItems.map((item) => (
            <InventoryItem
              key={item.id}
              rarityGroup={item.rarityGroup}
              price={300}
              image={item.image}
              exterior={item.exterior}
              skinName={item.skinName}
              skinType={item.skinType}
              isSouvenir={item.isSouvenir}
              isStatTrak={item.isStatTrak}
              skinChance={item.skinChance}
            />
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
}

Component.defaultProps = {
  items: []
};

Component.propTypes = {};

export const InventoryContent = React.memo(Component);
