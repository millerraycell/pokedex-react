import './App.css'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './shared/Footer'

function App() {
  const navigation = useNavigation();

  return (
    <>
      <div
        id="detail"
        className={
          navigation.state === "loading" ? "loading" : ""
        }
      ></div>
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default App
