import { useState } from 'react';
import { greeting } from './greeting';
import Dropdown from './Dropdown';
import { options } from './constants';

export default function App() {
  const [value, setValue] = useState(options[0]);

  return (
    <>
      <h1>{greeting(__APP_NAME__)}</h1>
      <div className="card">
        <h2>Card</h2>
        <Dropdown
          options={options}
          value={value}
          onChange={setValue}
        />
        <p className={"card-description"}>
        Lorem ipsum dolor sit amet,
         supra mutationem signate. 
        Nunc porta pulvinar lorem, a molestie elit vulputate nec. Maecenas vulputate fringilla
         mi, a posuere arcu tempor sit amet. Etiam porta nisi ut molestie hendrerit. Aenean luctus nibh vel sapien interdum, sit 
         amet cursus nunc
          aliquam. 
          Quisque rhoncus elementum sodales. Fusce placerat eros ut gravida rhoncus. Fusce pharetra, leo vitae dapibus faucibus, 
          dolor nisl placerat elit, eget dignissim odio tortor in dolor.</p>
        <button type="button" onClick={() => {
          const currentIndex = options.indexOf(value);
          const nextIndex = (currentIndex + 1) % options.length;

          setValue(options[nextIndex]);
        }}>
          Option <span>{options.indexOf(value) + 1}</span> is selected
        </button>
      </div>
    </>
  );
}
