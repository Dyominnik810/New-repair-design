document.addEventListener("DOMContentLoaded", function(event) { 
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

  });