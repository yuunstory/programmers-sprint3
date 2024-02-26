import styled from 'styled-components';
import logo from '../../assets/images/oliveyoung_logo.png';

function Footer() {
  return (
    <FooterStyle>
      <h1 className="logo">
        <img src={logo} alt="oliveyoung" />
      </h1>
      <div className="copyright">
        <p>copyright(c), 2024, Olive Young.</p>
      </div>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.color.background};
  display: flex;
  justify-content: space-between;

  .logo {
    img {
      width: 140px;
    }
  }

  .copyright {
    p {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.color.text};
    }
  }
`;

export default Footer;
