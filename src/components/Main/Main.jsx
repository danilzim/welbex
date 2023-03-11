import "./Main.css";

export const Main = () => {
  return (
    <main className="page">
      <div className="page__container _container">
        <div className="page__content">
          <div className="main-block">
            <h1 className="main-block__title">Зарабатывайте больше </h1>
            <h2 className="main-block__subtitle">с WELBEX</h2>
            <h3 className="main-block__text">
              Развиваем и контролируем продажи за вас
            </h3>
          </div>
          <div className="page__information info">
            <div className="info__header">
              Вместе с{" "}
              <span className="info__highlight">БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span>{" "}
              мы дарим:
            </div>
            <div className="info__body body">
              <div className="body__text-block">
                <div className="line">
                  <img src="icons/line.svg" alt="line" />
                </div>
                <div className="body__title-mobile">SKYPE АУДИТ</div>
                <div className="body__title">ВИДЖЕТЫ</div>
                <div className="body__subtitile">30 готовых решений</div>
              </div>
              <div className="body__text-block">
                <div className="line">
                  <img src="icons/line.svg" alt="line" />
                </div>
                <div className="body__title-mobile">30 ВИДЖЕТОВ</div>
                <div className="body__title">DASHBOARD</div>
                <div className="body__subtitile">
                  с показателями вашего бизнеса
                </div>
              </div>
              <div className="body__text-block">
                <div className="line">
                  <img src="icons/line.svg" alt="line" />
                </div>
                <div className="body__title-mobile">DASHBOARD</div>
                <div className="body__title">SKYPE АУДИТ</div>
                <div className="body__subtitile">
                  отдела продаж и CRM системы
                </div>
              </div>
              <div className="body__text-block">
                <div className="line">
                  <img src="icons/line.svg" alt="line" />
                </div>
                <div className="body__title-mobile">МЕСЯЦ AMOCRM</div>
                <div className="body__title">35 ДНЕЙ</div>
                <div className="body__subtitile">использования CRM</div>
              </div>
            </div>
            <form className="info__btn btn">
              <button className="btn__get-consultation">
                Получить консультацию
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
