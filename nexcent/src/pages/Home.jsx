import React from 'react'
import Header from '../components/layouts/Header'
import HeroComponent from '../components/home-page-components/HeroComponent'
import ClientComponent from '../components/home-page-components/ClientComponent';
import ManageComponent from '../components/home-page-components/ManageComponent';
import UnseenComponent from '../components/home-page-components/UnseenComponent';
import HelpComponent from '../components/home-page-components/HelpComponent';
import Footer from '../components/home-page-components/Footer';
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroComponent />
        <ClientComponent/>
        <ManageComponent/>
        <UnseenComponent/>
        <HelpComponent/>
      </main>
      <Footer/>
    </>
  );
}

export default Home