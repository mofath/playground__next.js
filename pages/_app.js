import { appWithTranslation } from 'next-i18next';
import 'grapesjs/dist/css/grapes.min.css';
import '../page-builder/assets/sass/canvas.scss';
import '../page-builder/assets/sass/layout.scss';
import '../page-builder/assets/sass/cms.scss';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
