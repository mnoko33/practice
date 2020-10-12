import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';

function Dropdown({ selectedItem, setSelectedItem }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <DropdownWrapper>
      <DropdownButton onClick={() => setIsVisible(!isVisible)}>
        {selectedItem}
      </DropdownButton>
      {isVisible && 
        <DropdownMenu 
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      }
    </DropdownWrapper>
  )
}

export default Dropdown;

const DropdownWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const DropdownButton = styled.button`
  width: 100px;
  padding: 5px;
`;