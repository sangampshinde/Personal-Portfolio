import React, { useEffect, useRef, useState } from 'react';
import "./NavTab.css";

const NavTab = ({ tabs, onChange }) => {
  const element = useRef([]);
  const [active, setActive] = useState({});

  useEffect(() => {
    if (element.current[0]) {
      const firstTab = element.current[0].getBoundingClientRect();
      setActive(firstTab);
      onChange(element.current[0].innerText); // Pass the name of the first tab to onChange
    }
  }, [onChange]); // Add onChange as a dependency here

  return (
    <nav className='nav__tabs'>
      {
        tabs.map((name, index) => (
          <button
            ref={el => { element.current[index] = el; }}
            onClick={(e) => {
              setActive(e.target.getBoundingClientRect());
              onChange(name); // Pass the name of the selected tab to onChange
            }}
            key={index}>
            {name}
          </button>
        ))
      }
      <span className='indicator' style={{
        left: `${active.left}px`,
        top: `${active.top}px`,
        width: `${active.width}px`,
        height: `${active.height}px`,
      }}>
      </span>
    </nav>
  );
};

export default NavTab;
