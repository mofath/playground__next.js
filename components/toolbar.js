import { useRouter } from 'next/router';
import { LanguageSwitcher } from './LanguageSwitch';
import styles from '../styles/Toolbar.module.css';

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => router.push('/profile')}>Profile</div>
      <div onClick={() => router.push('/feed/1')}>Feed</div>
      <div onClick={() => (window.location.href = 'https://github.com/')}>GitHub</div>
      <div>
        <LanguageSwitcher />
      </div>
    </div>
  );
};
