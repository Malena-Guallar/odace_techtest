import './App.css'
import RegistrationBar from './components/RegistrationBar/RegistrationBar'

function App() {

  return (
    <div className="app">
      <p className="app_name">odace+</p>
      <p className='app_header'>The new standard to <span class="purple_word">create</span> social media <span class="purple_word">video content</span></p>
      <p className='text_header'>Combining top creatives with best-in-class AI solutions to help you produce high quality videos.<br></br> <b>You imagine. We do the rest.</b></p>
      <RegistrationBar />
      <div className='separation_line'/>
    </div>
  )
}

export default App
