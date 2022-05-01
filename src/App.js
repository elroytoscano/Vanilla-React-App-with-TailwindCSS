import './styles/tailwind.css';

import Button from './components/Button';

function App() {
  return (
    <div className='m-4'>
      <Button
        text='Simple Button'
        onClick={() => console.log('Simple button click')}
      />
    </div>
  );
}

export default App;
