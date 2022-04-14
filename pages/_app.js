import { appWithTranslation } from 'next-i18next';
import 'grapesjs/dist/css/grapes.min.css';
import '../editor/assets/sass/canvas.scss';
import '../editor/assets/sass/layout.scss';
import '../editor/assets/sass/cms.scss';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
