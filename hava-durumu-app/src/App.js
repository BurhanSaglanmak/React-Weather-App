import { useState } from 'react';
import './App.css';
import { SehirProvider } from './components/context/Sehirler';
import Dropdown from './components/Dropdown';
import HavaDurumu from './components/HavaDurumu';

function App() {
  const [ilkGun,setIlkGun]=useState([])
  const [ikinciGun,setIkinciGun]=useState([])
  const [ucuncuGun,setUcuncuGun]=useState([])
  const [dorduncuGun,setDorduncuGun]=useState([])
  const [besinciGun,setBesinciGun]=useState([])
  const [altıncıGun,setAltıncıGun]=useState([])
  const [yedinciGun,setYedinciGun]=useState([])
  return (
    <SehirProvider>
      <div className='App'>
        <h1 className='başlık'>Hava Durumu</h1>
      <Dropdown  setIlkGun={setIlkGun} setIkinciGun={setIkinciGun} setUcuncuGun={setUcuncuGun} setDorduncuGun={setDorduncuGun} setBesinciGun={setBesinciGun} setAltıncıGun={setAltıncıGun} setYedinciGun={setYedinciGun} />
      <HavaDurumu ilkGun={ilkGun} ikinciGun={ikinciGun} ucuncuGun={ucuncuGun} dorduncuGun={dorduncuGun} besinciGun={besinciGun} altıncıGun={altıncıGun} yedinciGun={yedinciGun} />
      </div>
    </SehirProvider>
  );
}

export default App;
