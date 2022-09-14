import React from 'react';

import './styles.scss';

import Filter from './Filter/Filter';
import DropCard from './DropCard';
import OnlineCount from '../../HeaderBottom/OnlineCount';

function LiveDrop() {
  return (
    <div id="live-drop">
      <div className="live__wrapper">
        <OnlineCount />
        <Filter />
        <ul className="live__list">
          <DropCard
            rarity="rarity-group-ConsumerGrade"
            weapon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJlY60g_7zNqnumXlQ5sJ0teXI8oThxlfg_UQ_NmGlI4WdJlI3MwuF8gLqxr-5gJK6vZ2fwHNrvHRzsSvemRepwUYbfQ7bq_U/180fx140f"
          />
          <DropCard
            rarity="rarity-group-IndustrialGrade"
            weapon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLfYkWNFppwj2rCQrN733QXgqEc5MGD7JYKTIAI5ZV-ErwK2krvrhZHttZrOmnp9-n51haggJHM/180fx140f"
          />
          <DropCard
            rarity="rarity-group-MilSpec"
            weapon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLP7LWnn8f7p0gjrnDpdvxi1Xn80JqYGygLI_DdQJsMgyC_AO4xb_p0ce66ZXImmwj5Hei5N5mVw/180fx140f"
          />
          <DropCard
            rarity="rarity-group-Restricted"
            weapon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJmo-Chcj4OrzZgiVSsZZ12urD842i3gOw-hVkYWuiIYXAIFBtMFiE_1boxO3thZ6075nB1zI97cunGUx0/180fx140f"
          />
          <DropCard
            rarity="rarity-group-Classified"
            weapon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfw-bbeQJD_eOwm5KIkvPLPr7Vn35cppxyiLzCrNyn21bi8xU4NmqgdY6QJA9rNAnQ81i5l---0J-4vcnMnSN9-n51LzPFFHg/180fx140f"
          />
          <DropCard
            rarity="rarity-group-Covert"
            weapon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjpR09ujgL-KguP7J6nemGJS18h0juDU-MKtigXm8kdoaz-nJ4WUdQM9YlHSqVW6w-npg5S47c-bmyEwvnF35CmOgVXp1lu_tG4m/180fx140f"
          />
          <DropCard
            rarity="rarity-group-Contraband"
            weapon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJl5W0nPbmMrbummRD7fp9g-7J4cKi2A3kqhY9Zm6hJ9eXI1RqaVqF-ljowb271564vMyaznA1viF2s3jegVXp1uIYPzxv/180fx140f"
          />
          <DropCard
            rarity="rarity-group-Classified"
            weapon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW08-zl5SEhcj4OrzZgiUFu8By27iQ8Iqg3Qyy_Ec_Z2CmJ4eTcAdqZV3VrFi9k7_rhJK7vZmc1zI97eGSYpLn/180fx140f"
          />
          <DropCard
            rarity="rarity-group-Classified"
            weapon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTTl2VQ5sROh-zF_Jn4xlbkqURvZmiidYKRdAFoNVzR81bryLvmjZ7o6ZjAmyYw7CNw7SmLzRepwUYbn3RWfTI/180fx140f"
          />
          <DropCard
            rarity="rarity-group-IndustrialGrade"
            weapon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJk5O0nPbmMrbul35F59FjhefI9rP5gVO8v11pMj_1d4eVelVrYlCG_VDowefpgcC97s-dyXQx6SQqtn6JnECyhR5OcKUx0sEUJJZ_/180fx140f"
          />
          <DropCard
            rarity="rarity-group-MilSpec"
            weapon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJk5O0nPbmMrbul35F59FjhefI9rP5gVO8v11pMj_1d4eVelVrYlCG_VDowefpgcC97s-dyXQx6SQqtn6JnECyhR5OcKUx0sEUJJZ_/180fx140f"
          />
          <DropCard
            rarity="rarity-group-Contraband"
            weapon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09C5goW0n_L1JaKfwTkEvJEo3brCpNukiwa3-0dlZWn1LNfDJFM7ZV-C_1Xol-u6jcO7vIOJlyVX0tNyBw/180fx140f"
          />
          <DropCard weapon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09C5goW0n_L1JaKfwTkEvJEo3brCpNukiwa3-0dlZWn1LNfDJFM7ZV-C_1Xol-u6jcO7vIOJlyVX0tNyBw/180fx140f" />
          <DropCard
            rarity="rarity-group-MilSpec"
            weapon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09C5goW0n_L1JaKfwTkEvJEo3brCpNukiwa3-0dlZWn1LNfDJFM7ZV-C_1Xol-u6jcO7vIOJlyVX0tNyBw/180fx140f"
          />
          <DropCard
            rarity="rarity-group-IndustrialGrade"
            weapon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09-5lYyCg_77PYTck29Y_cg_0uqWp4qg2VXmqEVtNWj3Io_BdQM2NAzR8wC5k-m-gsC4u5zAmHVgvD5iuyjqIjX9IQ/180fx140f"
          />
          <DropCard
            rarity="rarity-group-Contraband"
            weapon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09-5lYyCg_77PYTck29Y_cg_0uqWp4qg2VXmqEVtNWj3Io_BdQM2NAzR8wC5k-m-gsC4u5zAmHVgvD5iuyjqIjX9IQ/180fx140f"
          />
        </ul>
      </div>
    </div>
  );
}

export default LiveDrop;
