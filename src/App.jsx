import { useState } from 'react';
import { greeting } from './greeting';
import Dropdown from './Dropdown';

export default function App() {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState('Option 1');

  return (
    <>
      <h1>{greeting(__APP_NAME__)}</h1>
      <div className="card">
        <h2>Card</h2>
        <Dropdown
          options={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']}
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
          setCount((c) => c + 1);
          setValue(`Option ${count}`);
        }}>
          Option <span>{count}</span> is selected
        </button>
      </div>
    </>
  );
}
