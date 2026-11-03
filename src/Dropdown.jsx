import { useState, useRef, useCallback, useId } from 'react';
import { useDismiss } from './hooks/useDismiss';

export default function Dropdown({ options, value, onChange }) {
  const dropdownId = useId();

  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);

  const dropdownRef = useRef(null);

  const onClose = useCallback(() => setOpen(false), []);

  useDismiss(dropdownRef, onClose, open);

  const toggle = () => {
    if (!open) setUp(window.innerHeight < 500);
    setOpen((o) => !o);
  };

  const selectOption = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className={"dropdown"} ref={dropdownRef}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={open ? dropdownId : undefined}
        aria-haspopup="listbox"
        onClick={toggle}
      >
        {value} ▾
      </button>
      {open && (
        <ul id={dropdownId} role="listbox" className={up ? 'dropdown-menu up' : 'dropdown-menu'}>
          {options.map((v) => (
            <li
              role="option"
              aria-selected={value === v}
              key={v}
              tabIndex={0}
              onClick={() => selectOption(v)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  selectOption(v);
                }
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
