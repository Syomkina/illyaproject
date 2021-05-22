const name = prompt('Пожалуйста, представьтесь?');
            if (name) {
              document.querySelector('#welcome').innerHTML = `<b>${name}</b>, добро пожаловать на сайт Minto!`;
            } else {
              document.querySelector('#welcome').innerHTML = '<b>Гость</b>, добро пожаловать на сайт Minto!';
            }