import { useState } from 'react';

export default function Dropdown({ options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);

  const toggle = () => {
    if (!open) setUp(window.innerHeight < 500);
    setOpen((o) => !o);
  };

  return (
    <div className={"dropdown"}>
      <button type="button" onClick={toggle}>
        {value} ▾
      </button>
      {open && (
        <ul className={up ? 'dropdown-menu up' : 'dropdown-menu'}>
          {options.map((v) => (
            <li
              key={v}
              onClick={() => {
                onChange(v);
                setOpen(false);
              }}
            >
              {v}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
