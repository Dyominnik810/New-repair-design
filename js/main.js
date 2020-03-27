/*document.addEventListener("DOMContentLoaded", function(event) { 
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible'); //переключатель на противоположное состояние (был 1, будет 0; был 0, будет 1)
    }
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    });
    
    closeBtn.addEventListener('click', switchModal);

  });*/

  $(document).ready(function () {
      var modal = $('.modal'),
          modalBtn = $('[data-toggle=modal]'),
          closeBtn = $('.modal__close');

    
    
    modalBtn.on('click', function() {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function() {
        modal.toggleClass('modal--visible');
    });
});
    var mySwiper = new Swiper ('.swiper-container',{
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 10 + bullets.width() + 10);
    bullets.css('left', prev.width() + 10);

    new WOW().init();

    //валидация формы

    $('.modal__form').validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            // строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: {
                required: true,
                minlength: 17,
                
            },
            modalСheckbox: {
                required: true
            },
            // правило объект (блок)
            userEmail: {
              required: true,
              email: true
            }
          }, //сообщения
        messages: {
            userName: {
                required: "Заполните поле",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не больше 15 букв",
            },
            userPhone: "Заполните поле",
            userEmail: {
              required: "Заполните поле",
              email: "Введите корректный email: name@domain.com"
            },
            modalСheckbox: {
                required: "Поставьте галочку"
            }
        },
    });

    $(document).ready(function() {
        $('[type=tel]').mask('+7(000)-000-00-00', {placeholder: "+7(000)-000-00-00"});
});
   
$('.footer__form').validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            // строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: {
                required: true,
                minlength: 17
            },
            footerCheckbox:{
                required: true,
            },
           
          }, //сообщения
        messages: {
            userName: {
                required: "Заполните поле",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не больше 15 букв",
            },
            userPhone: {
                required: "Заполните поле",
                minlength: "Номер не короче 10 цифр",
                maxlength: "Номер не больше 10 цифр",
            },
            footerCheckbox: {
                required: "Поставьте галочку"
            }
            
        },
    });

    $('.control__form').validate({
        errorElement: "div",
        errorClass: "invalid",
        
        rules: {
            // строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: {
                required: true,
                minlength: 17
            },
            controlCheckbox:{
                required: true,
            },
           
          }, //сообщения
        messages: {
            userName: {
                required: "Заполните поле",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не больше 15 букв",
            },
            userPhone: {
                required: "Заполните поле",
                minlength: "Номер не короче 10 цифр",
                maxlength: "Номер не больше 10 цифр",
            },
            controlCheckbox: {
                required: "Поставьте галочку"
            }
            
            
        },

        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    console.log('Ajax сработал! Ответ сервера: ' + response);
                    alert('Форма отправленна. Мы свяжемся с вами в течении 15 минут');
                    $(form)[0].reset();     
                    modal.removeClass('modal--visible');         
                },
                error: function (response) {
                    console.error('Ошибка запроса,' + response);
                }
            });
          }
    });

        // Функция ymaps.ready() будет вызвана, когда
            // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
            ymaps.ready(function () {
                var myMap = new ymaps.Map('map', {
                        center: [55.790909, 49.112711],
                        zoom: 9
                    }, {
                        searchControlProvider: 'yandex#search'
                    }),
            
                    // Создаём макет содержимого.
                    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                    ),
            
                    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                        hintContent: 'Наш офис',
                        balloonContent: 'Вход со двора'
                    }, {
                        // Опции.
                        // Необходимо указать данный тип макета.
                        iconLayout: 'default#image',
                        // Своё изображение иконки метки.
                        iconImageHref: 'img/map-mark.png',
                        // Размеры метки.
                        iconImageSize: [42, 42],
                        // Смещение левого верхнего угла иконки относительно
                        // её "ножки" (точки привязки).
                        iconImageOffset: [-5, -38]
                    });
            
                myMap.geoObjects
                    .add(myPlacemark);
            });
