import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutUs from './Components/AboutUs/AboutUs';
import Citizenship from './Components/Citizenship/Citizenship';
import Club from './Components/Club/Club';
import Confirmation from './Components/CheckOut/Confirmation';
import Footer from './Components/Footer/Footer';
import GoogleForm from './Components/CheckOut/GoogleForm';
import Instagram from './Components/InstagramIcon/Instagram';
import ItemDetailContainer from './Components/Item/ItemDetailContainer';
import ItemListContainer from './Components/Item/ItemListContainer';
import Landing from './Components/Landing/Landing';
import MailForm from './Components/CheckOut/MailForm';
import NavBar from './Components/Navbar/NavBar';
import OrderContextProvider from './Components/Context/OrderContextProvider';
import OrderWithProblems from './Components/CheckOut/OrderWithProblems';
import Resources from './Components/Resources/Resources';
import Secretaria from './Components/Secretaria/Secretaria'
import Theme from './Components/Theme/Theme';
import Translations from './Components/Translations/Translations';
import WhatsApp from './Components/WhatsAppIcon/WhatsApp';
import styled from '@emotion/styled';

function App() {

  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

  return (
    <>
      <Theme>
        <OrderContextProvider >
        <BrowserRouter>
        <NavBar/>
        <Offset />
        <WhatsApp />
        <Instagram />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/courses' element={<ItemListContainer />} />
          <Route exact path='/courses/:courseId' element={<ItemDetailContainer />} />
          <Route exact path='/citizenship' element={<Citizenship />} />
          <Route exact path='/translations' element={<Translations />} />
          <Route exact path='/serviceform' element={<MailForm />} />
          <Route exact path='/mailform' element={<GoogleForm />} />
          <Route exact path='/confirmation' element={<Confirmation />} />
          <Route exact path='/order/problems' element={<OrderWithProblems />} />
          <Route exact path='/club' element={<Club />} />
          <Route exact path='/resources' element={<Resources />} />
          <Route exact path='/aboutus' element={<AboutUs />} />
        </Routes>
        </BrowserRouter>
        <Footer />
        </OrderContextProvider>
      </Theme>
    </>
  );
}

export default App;
