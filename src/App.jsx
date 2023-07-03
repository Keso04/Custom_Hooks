import './App.css';
import useDetectDevice from './hooks/useDetectDevice';
import useLocalStorage from './hooks/useLocalStorage';
import useWindowResize from './hooks/useWindowResize';

function App() {
  const [isOpen, toggle] = useLocalStorage('tab', true);
  const {width, height} = useWindowResize();
  const device = useDetectDevice();
 
  // console.log(width, height);
  console.log(isOpen, device);

  {isOpen && device === 'Desktop' && document.body.classList.add('dark-mode')};
  {!isOpen && document.body.classList.remove('dark-mode')};

  return (
    <div>
       <button className='btn' onClick={() => toggle((prevState) => !prevState)}>Toggle Theme</button>
       {/* {width < 600 && <h2>MOBILE</h2>} */}
    </div>
  );
}

export default App;
