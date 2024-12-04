import Drawer from './assets/';
import Collapse from '../pages/collapse'
import './App.css'

function App() {

  return (
    <>
      <div>
      <h1>React Collapse Example</h1>
      <Collapse title="Click to Expand">
        <p>This is some collapsible content.</p>
        <p>It could be anything — text, images, or components!</p>
      </Collapse>
      <Collapse title="Another Collapse">
        <p>Here&apos;s another piece of content that can be collapsed.</p>
      </Collapse>
    </div> 
    </>
  )  
  
}

export default App
