import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__logo logo">
          <a href="" className="logo__welbex">
            <img src="icons/logo_welbex.svg" alt="logo" />
          </a>
          <div className="logo__signature">
            крупный интегратор CRM в Росcии
          </div>
          <div className="logo__signature">
           и ещё 8 странах
          </div>
        </div>
        <nav className="header__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="" className="menu__link">
                Услуги
              </a>
            </li>
            <li className="menu__item">
              <a href="" className="menu__link">
                Виджеты
              </a>
            </li>
            <li className="menu__item">
              <a href="" className="menu__link">
                Интеграции
              </a>
            </li>
            <li className="menu__item">
              <a href="" className="menu__link">
                Кейсы
              </a>
            </li>
            <li className="menu__item _none">
              <a href="" className="menu__link">
                Сертификаты
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__contact contact">
          <a href="" className="phone-number">+7 555 555-55-55</a>
          <a href="" className="contact__icon">
            <img src="icons/telegram.svg" alt="logo" />
          </a>
          <a href="" className="contact__icon">
            <img src="icons/phone.svg" alt="logo" />
          </a>
          <a href="" className="contact__icon">
            <img src="icons/whatsapp.svg" alt="logo" />
          </a>
        </div>
      </div>
    </header>
  );
};
