import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollButton = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  const Button = styled.div`
  position: fixed; 
  left: 20px;
  bottom: 20px;
  height: 40px;
  backgroundColor: black;
  font-size: 12px;
  padding: 5px;
  z-index: 1;
  cursor: pointer;
  color: black;
`

  return (
    <Button onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}>
      <ArrowUpwardIcon /><br></br>
      back to start
    </Button>
  );
}

export default ScrollButton;