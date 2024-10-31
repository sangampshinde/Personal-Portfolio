import React, { useEffect, useRef, useState } from 'react';
import "./NavTab.css";

const NavTab = ({ tabs, onChange }) => {
  const element = useRef([]);
  const [active, setActive] = useState({});
  

  useEffect(() => {
    // Only run this effect once on mount, or if tabs change
    if (element.current[0]) {
      const firstTab = element.current[0].getBoundingClientRect();
      setActive(firstTab);
      onChange(tabs[0]); // Pass the name of the first tab to onChange
    }
  }, [element]);

  return (
    <nav className='nav__tabs'>
      {
        tabs.map((name, index) => (
          <button
            ref={el => { element.current[index] = el; }}
            onClick={(e) => {
              setActive(e.target.getBoundingClientRect());
              console.log(e.target.getBoundingClientRect());
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
