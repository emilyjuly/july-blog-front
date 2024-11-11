import styles from './Footer.module.css';
import Logo from '../../assets/july-blog.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>July Blog</p>
      <img src={Logo} alt="Logo do site" width={40} />
    </footer>
  );
};

export default Footer;
