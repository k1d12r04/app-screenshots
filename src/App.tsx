import './App.css';
import LanguageSelection from '@/components/LanguageSelection';
import DisplaySelection from './components/DisplaySelection';
import ScreenShots from './components/ScreenShots';

function App() {
  return (
    <main className="my-4">
      <LanguageSelection />
      <DisplaySelection />
      <ScreenShots />
    </main>
  );
}

export default App;
