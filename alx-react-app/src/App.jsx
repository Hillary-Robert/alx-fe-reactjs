import WelcomeMessage from './components/WelcomeMessage'

import Header from './components/Header'

import Footer from './components/Footer'

import MainContent from './components/MainContent'

import UserProfile from './components/UserProfile'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>


      
      <Header />

      <MainContent />

      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      
      <Footer />

      <WelcomeMessage />

    </>  
  )
}

export default App
