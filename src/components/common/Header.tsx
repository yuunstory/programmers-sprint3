import { styled } from 'styled-components';
import logo from '../../assets/images/oliveyoung_logo.png';
import { FaSignInAlt, FaRegUser } from 'react-icons/fa';
import InputText from './InputText';
import { Link } from 'react-router-dom';

const CATEGORY = [
  {
    id: null,
    name: '전체',
  },
  {
    id: 0,
    name: '스킨케어',
  },
  {
    id: 1,
    name: '메이크업/네일',
  },
  {
    id: 2,
    name: '미용소품',
  },
  {
    id: 3,
    name: '맨즈케어',
  },
  {
    id: 4,
    name: '향수',
  },
  {
    id: 5,
    name: '바디케어',
  },
];

function Header() {
  return (
    <HeaderStyle>
      <div className="header-top">
        <Link to="/">
          <h1 className="logo">
            <img src={logo} alt="oliveyoung" />
          </h1>
        </Link>

        <div className="search-input">
          <InputText placeholder="상품, 브랜드 검색" />
        </div>

        <nav className="auth">
          <ul>
            <li>
              <Link to="/login">
                <FaSignInAlt />
                로그인
              </Link>
            </li>
            <li>
              <a href="/signup">
                <FaRegUser />
                회원가입
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <nav className="category">
        <ul>
          {CATEGORY.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.id === null ? `/products` : `/products?category_id=${item.id}`}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};

  border-bottom: 1px solid ${({ theme }) => theme.color.background};

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    img {
      width: 240px;
    }
  }

  .auth {
    ul {
      display: flex;
      gap: 16px;

      li {
        a {
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({ theme }) => theme.color.text};
          display: flex;
          align-item: center;
          line-height: 1;

          svg {
            margin-right: 6px;
          }
        }
      }
    }
  }

  .category {
    border-top: 1px solid ${({ theme }) => theme.color.background};

    ul {
      display: flex;
      justify-content: space-around;
      margin: 0;
      padding: 10px 0;

      li {
        a {
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({ theme }) => theme.color.text};

          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }
`;

export default Header;
