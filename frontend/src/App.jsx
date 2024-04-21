import { Timeline } from './components/Timeline'
import './index.css'

function App() {

  return (
    <div>
      <div className='flex justify-center py-5 border-b'>
        this is a app bar
      </div>
    <div className='pt-2'>
      <Timeline />
    </div>
    <div className='pt-2'>
      <Timeline />
    </div>
    </div>
  )
}

export default App
