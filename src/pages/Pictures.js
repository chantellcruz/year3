import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import One from '../assets/photos/001.jpg';
import Two from '../assets/photos/002.jpg';
import Three from '../assets/photos/003.jpg';
import Four from '../assets/photos/004.jpg';
import Five from '../assets/photos/005.jpg';
import Six from '../assets/photos/006.jpg';
import Seven from '../assets/photos/007.jpg';
import Eight from '../assets/photos/008.jpg';
import Nine from '../assets/photos/009.jpg';
import Ten from '../assets/photos/010.jpg';
import Eleven from '../assets/photos/011.jpg';
import Twelve from '../assets/photos/012.jpg';
import Thirteen from '../assets/photos/013.jpg';
import Fourteen from '../assets/photos/014.jpg';

export default function Pictures() {
  return (
    <div id="pictures">
      <h1>Some pictures, just because</h1>
      <div className="flex-container">
        <Box sx={{ width: '70vw' }}>
          <ImageList variant="masonry" cols={3} gap={30}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box></div></div>
  );
}

const itemData = [
  {
    img: One,
    title: 'HCS Raleigh',
  },
  {
    img: Fourteen,
    title: 'Rainier 2019',
  },

  {
    img: Three,
    title: 'Disney 2022',
  },
  {
    img: Four,
    title: 'Lego Store',
  },
  {
    img: Five,
    title: 'Bloody Nose',
  },
  {
    img: Six,
    title: 'Dreamhack 2022',
  },
  {
    img: Seven,
    title: 'Braves',
  },

  {
    img: Eight,
    title: 'Shrimp',
  },
  {
    img: Two,
    title: 'Rainier 2022',
  },
  {
    img: Nine,
    title: 'Happi',
  },
  {
    img: Ten,
    title: 'Arches',
  },
  {
    img: Eleven,
    title: 'Tigers vs. Twins',
  },
  {
    img: Twelve,
    title: 'me when i see u',
  },
  {
    img: Thirteen,
    title: 'PAX South 2019',
  },

];