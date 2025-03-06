
import './App.css'
import Children from './components/Children'
import Modals from './components/Modals'
import Collapsible from './components/Collapsible'

function App() {

  return (
    <>
     <Children/>
     <Modals/>
     <Collapsible title="Section 1">
                <p>This is the content of section 1.</p>
            </Collapsible>
            <Collapsible title="Section 2">
                <p>This is the content of section 2.</p>
            </Collapsible>
    </>
  )
}

export default App



