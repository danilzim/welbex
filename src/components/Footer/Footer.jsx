import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__menu menu">
          <div className="menu-block">
            <div className="menu-block__title">О КОМПАНИИ</div>
            <ul>
              <li className="menu-block__item">
                <a href="">Партнёрская программа</a>
              </li>
              <li className="menu-block__item">
                <a href="">Вакансии</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="menu-block__title">МЕНЮ</div>
            <ul className="menu-block__list _displacement">
              <li className="menu-block__item">
                <a href="">Расчёт стоимости</a>
              </li>
              <li className="menu-block__item _displacement">
                <a href="">Услуги</a>
              </li>
              <li className="menu-block__item _displacement">
                <a href="">Виджеты</a>
              </li>
              <li className="menu-block__item _displacement">
                <a href="">Интеграции</a>
              </li>
              <li className="menu-block__item _displacement">
                <a href="">Наши клиенты</a>
              </li>

              <li className="menu-block__item">
                <a href="">Кейсы</a>
              </li>
              <li className="menu-block__item">
                <a href="">Благодарственные письма</a>
              </li>
              <li className="menu-block__item">
                <a href="">Сертификаты</a>
              </li>
              <li className="menu-block__item">
                <a href="">Блог на Youtube</a>
              </li>
              <li className="menu-block__item">
                <a href="">Вопрос / Ответ</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="menu-block__title _right">КОНТАКТЫ</div>
            <ul>
              <li className="_information">
                <a href="" className="phone-number">+7 555 555-55-55</a>
              </li>
              <li className="_information">
                <a href="" className="footer__icon">
                  <img src="icons/telegram.svg" alt="logo" />
                </a>
                <a href="" className="footer__icon">
                  <img src="icons/phone.svg" alt="logo" />
                </a>
                <a href="" className="footer__icon">
                  <img src="icons/whatsapp.svg" alt="logo" />
                </a>
              </li>
              <li className="menu-block__item">
                    Москва, Путевой проезд 3с1, к 902
              </li>
            </ul>
          </div>
        </div>
        <div className="_right">
          <div>©WELBEX 2022. Все права защищены.</div>
          <a href="" className="confidencial">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
};
