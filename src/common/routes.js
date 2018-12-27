import makeRouteObject from './utils/makeRouteObject';
import HomePage from './views/home/HomePage';
import AboutPage from './views/about/AboutPage';
import ContactPage from './views/contact/ContactPage';
import KoalaPage from './views/koala/KoalaPage';


const prefix = '';
const exactTrue = true;
const exactFalse = false;

const homeURL = '/';
const homeTitle = 'Home';

const aboutURL = '/about';
const aboutTitle = 'About';

const contactURL = '/contact';
const contactTitle = 'Contact';

const koalaURL = '/koala';
const koalaTitle = 'Koala';

const routes = {
  routes: [
    makeRouteObject(
      prefix,
      homeURL,
      HomePage,
      exactTrue,
      homeTitle,
    ),
    makeRouteObject(
      prefix,
      aboutURL,
      AboutPage,
      exactTrue,
      aboutTitle,
    ),
    makeRouteObject(
      prefix,
      contactURL,
      ContactPage,
      exactTrue,
      contactTitle,
    ),
    makeRouteObject(
      prefix,
      koalaURL,
      KoalaPage,
      exactTrue,
      koalaTitle,
    ),
  ],
};


export default routes;
