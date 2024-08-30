import '../scss/style.scss';

const loadJsonData = async () => {
  try {
    const response = await fetch('data.json');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
}

const res = await loadJsonData();

res.forEach(element => {
  const li = document.createElement('li');
  li.classList.add('cart-list__item');

  li.innerHTML = `
    <article class="cart-list__cart cart">

              <h3 class="cart__title">${element.type}</h3>

              <div class="cart__info">

                <div class="cart__info-img">
                  <img class="cart__info-img-image" src="./src/img/photo1.jpg"
                    alt="">
                </div>

                <ul class="cart__info-text">
                  <li class="cart__info-text-item">
                    <p class="cart__info-text-item-title">Легковой
                      автомобиль</p>
                    <p class="cart__info-text-item-price">5 000 руб</p>
                  </li>
                  <li class="cart__info-text-item">
                    <p class="cart__info-text-item-title">Мотоцикл (крадроцикл
                      и
                      т.д.)</p>
                    <p class="cart__info-text-item-price">5 000 руб</p>
                  </li>
                  <li class="cart__info-text-item">
                    <p class="cart__info-text-item-title">Внедорожник</p>
                    <p class="cart__info-text-item-price">нет</p>
                  </li>
                  <li class="cart__info-text-item">
                    <p class="cart__info-text-item-title">Микроавтобус</p>
                    <p class="cart__info-text-item-price">нет</p>
                  </li>
                  <li class="cart__info-text-item">
                    <p class="cart__info-text-item-title">Загородный тариф</p>
                    <p class="cart__info-text-item-price">${element.out_of_town_rate}</p>
                  </li>
                </ul>

                <ul class="cart__info-buttons">
                  <li class="cart__info-buttons-item">
                    <a class="cart__info-buttons-item-link" href="">
                      +7 999 99 99
                    </a>
                  </li>
                  <li class="cart__info-buttons-item">
                    <a class="cart__info-buttons-item-link" href="">
                      +7 999 99 99
                    </a>
                  </li>
                  <li class="cart__info-buttons-item">
                    <a class="cart__info-buttons-item-link cart__info-buttons-item-link--address"
                      href="">
                      <p>Место стоянки</p>
                      <p>${element.location}</p>
                    </a>
                  </li>
                  <li class="cart__info-buttons-item">
                    <a class="cart__info-buttons-item-link cart__info-buttons-item-link--id"
                      href="">
                      <p>ID объявления 63</p>
                      <p>Заказать рекламу</p>
                    </a>
                  </li>
                </ul>

              </div>

              <p class="cart__descr">${element.advertisement}</p>

            </article>
  
  
  `
  document.querySelector('.cart-list').append(li);
});

