import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

function DropdownMenu(props) {
  const dropdown = useRef();
  const {
    isVisible,
    setIsVisible,
    selectedItem,
    setSelectedItem
  } = props;

  const items= [
    'input',
    'checkbox',
    'radio'
  ]

  const handleClickItem = (item) => {
    setSelectedItem(item);
    setIsVisible(false);
  }

  const handleClickOutside = (event) => {
    if (!dropdown.current.contains(event.target)) {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    }
  }, [])

  if (isVisible) {
    return (
      <DropdownMenuWrapper ref={dropdown}>
        {items.map(
          (item, idx) => 
            <DropdownItem key={idx} onClick={() => handleClickItem(item)}>
              <CheckedItem>{`${selectedItem === item ? 'v' : ''}`}</CheckedItem>
              <ItemName isSelected={selectedItem === item}>{item}</ItemName>
            </DropdownItem>)
        }
      </DropdownMenuWrapper>
    )
  } else {
    return null;
  }
}

export default DropdownMenu;

const DropdownMenuWrapper = styled.div`
  position: absolute;
  width: 100px;
  background-color: #FFF;
  border: 1px solid #000;
`;

const DropdownItem = styled.div`
  width: 100%;
  margin: 5px auto;
  padding: 0 5px;
  &:hover {
    cursor: pointer;
    background-color: #ECECEC;
  }
`;

const CheckedItem = styled.span`
  width: 10px;
  display: inline-block;
  color: red;
`;

const ItemName = styled.span`
  color: ${props => props.isSelected ? 'red' : 'black'}
`;