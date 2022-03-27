import { withTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Toolbar } from '../components/toolbar';
import styles from '../styles/Home.module.css';

function Home({ t }) {
  return (
    <div className={styles.container}>
      <Toolbar />
      {t('hello')}
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer'])),
  },
});

export default withTranslation('common')(Home);
