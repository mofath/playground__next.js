import { appWithTranslation } from 'next-i18next';
import 'grapesjs/dist/css/grapes.min.css';
import '../grapesjsEditor/assets/sass/canvas.scss';
import '../grapesjsEditor/assets/sass/layout.scss';
import '../grapesjsEditor/assets/sass/cms.scss';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
