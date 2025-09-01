import { useState, useEffect } from 'react'
import './App.css'

import { Header, ImageSec, Hero, Footer, Objective, KeyNotes, Loader, Partners, EventDetails, InitiativeBy, Collabs, OurAssociates, About} from './components'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaderMounted, setIsLoaderMounted] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);


    const unmountTimer = setTimeout(() => {
      setIsLoaderMounted(false);
    }, 3200);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  

  return (
    <>
      <Loader isFadingOut={!isLoading} />

      <Header/>

      <Hero/>

      <section id="overview">
        <About/>
      </section>

      <Objective />

      <InitiativeBy/>
      
      <ImageSec/>
      
      <KeyNotes/>
      
      <section id="events">
        <EventDetails />
      </section>
      
      <OurAssociates/>
      
      <section id="partnerships">
        <Partners/>
      </section>
      
      <Collabs/>
      
      <section id='contactUs'> 
        <Footer/>
      </section>

    </>
  )
}

export default App
