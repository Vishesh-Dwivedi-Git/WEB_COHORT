import { BrowserRouter,Routes,Route,Link ,useNavigate, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div>
      <BrowserRouter>
        <Routes>
        <Route path='/neet' element={<Layout/>}>
          <Route path="/neet/online-coaching-class-11" element={<Class11program/>}/>
          <Route path="/neet/online-coaching-class-12" element={<Class12program/>}/>
          <Route path='/' element={<Landing/>}/>
          <Route path='*' element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
<footer></footer>
       </div>
    </>
  )
}
function Layout(){
  return(
    <div style={{height:"100vh"}}>
    <Header/>
      <div style={{height:"90vh"}}>
      <Outlet/>
      </div>
      footer
    </div>
  )
}
function Header(){
  return(
    <div>
     <Link to="/">Home</Link>
     <Link to="/neet/online-coaching-class-11">Class 11</Link>
     <Link to="/neet/online-coaching-class-12">Class 12</Link>
    </div>
  )
}
function Landing(){
  return(
    <h1>Welcome to Allen</h1>
  )
}

function Class11program(){
  return(
    <h1>Class 11 program </h1>
  )
}

function Class12program(){
  //const navigate=useNavigate();
  return(
    <div><h1>Class 12 Program </h1>
    </div>
  )
}
function Error(){
  return(
    <h1>404 Page</h1>
  )
}

function footer(){
  return(
    <h1>Thank you for choosing us</h1>
  )
}
export default App
