import makeRouteObject from './utils/makeRouteObject';
import AboutPage from './views/about/AboutPage';
import ContactPage from './views/contact/ContactPage';
import ImagesPage from './views/cssImages/ImagesPage';


const prefix = '';
const exactTrue = true;
const exactFalse = false;

const homeURL = '/';
const homeTitle = 'Home';

const aboutURL = '/about';
const aboutTitle = 'About';

const contactURL = '/contact';
const contactTitle = 'Contact';


const routes = {
  routes: [
    makeRouteObject(
      prefix,
      homeURL,
      ImagesPage,
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
  ],
};


export default routes;
