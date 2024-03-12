import './App.css'
import RegistrationBar from './components/RegistrationBar/RegistrationBar'

function App() {

  return (
    <div className="app">
      <p className="app_name">odace+</p>
      <p className='app_header'>The new standard to <span class="purple_word">create</span> social media <span class="purple_word">video content</span></p>
      <p>Combining top creatives with best-in-class AI solutions to help you produce high quality videos. You imagine. We do the rest.</p>
      <RegistrationBar />
    </div>
  )
}

export default App
