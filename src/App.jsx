import './App.css'
import Button from './components/Button'
import Result from './components/Result'
import Summary from './components/Summary'

function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <Result />
        <div className='summary-wrapper'>
          <Summary />
          <Button />
        </div>
      </div>
    </div>
  )
}

export default App
