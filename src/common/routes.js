import makeRouteObject from './utils/makeRouteObject';
import AboutPage from './views/about/AboutPage';
import ImagesPage from './views/cssImages/ImagesPage';
import AnimPage from './views/animations/AnimPage';

const prefix = '';
const exactTrue = true;
const exactFalse = false;

const homeURL = '/';
const homeTitle = 'Home';

const animURL = '/animations';
const animTitle = 'Animations';

const aboutURL = '/about';
const aboutTitle = 'About';

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
      animURL,
      AnimPage,
      exactTrue,
      animTitle,
    ),
    makeRouteObject(
      prefix,
      aboutURL,
      AboutPage,
      exactTrue,
      aboutTitle,
    ),
  ],
};


export default routes;
