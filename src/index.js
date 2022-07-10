import { Notify } from 'notiflix/build/notiflix-notify-aio';

const markUp = document.querySelector('.game');
for (let i = 0; i < 9; i += 1) {
  markUp.innerHTML += '<div class="block"></div>';
}
let step = 0;
markUp.addEventListener('click', onCLick);
function onCLick(event) {
  if (event.target.className === 'block') {
    if (step % 2 === 0) {
      event.target.innerHTML = 'x';
    } else {
      event.target.innerHTML = '0';
    }
    step += 1;
    checkWinner();
  }
}
function checkWinner() {
  const allBlock = document.querySelectorAll('.block');
  console.log(allBlock);
  if (
    allBlock[0].innerHTML === 'x' &&
    allBlock[1].innerHTML === 'x' &&
    allBlock[2].innerHTML === 'x'
  )
    Notify.success('Cross Winner', {
      width: '500px',
      fontSize: '28px',
    });

  if (
    allBlock[3].innerHTML === 'x' &&
    allBlock[4].innerHTML === 'x' &&
    allBlock[5].innerHTML === 'x'
  )
    Notify.success('Cross Winner', {
      width: '500px',
      fontSize: '28px',
    });
  if (
    allBlock[6].innerHTML === 'x' &&
    allBlock[7].innerHTML === 'x' &&
    allBlock[8].innerHTML === 'x'
  )
    Notify.success('Cross Winner', {
      width: '500px',
      fontSize: '28px',
    });
  if (
    allBlock[0].innerHTML === 'x' &&
    allBlock[3].innerHTML === 'x' &&
    allBlock[6].innerHTML === 'x'
  )
    Notify.success('Cross Winner', {
      width: '500px',
      fontSize: '28px',
    });
  if (
    allBlock[1].innerHTML === 'x' &&
    allBlock[4].innerHTML === 'x' &&
    allBlock[7].innerHTML === 'x'
  )
    Notify.success('Cross Winner', {
      width: '500px',
      fontSize: '28px',
    });
  if (
    allBlock[2].innerHTML === 'x' &&
    allBlock[5].innerHTML === 'x' &&
    allBlock[8].innerHTML === 'x'
  )
    Notify.success('Cross Winner', {
      width: '500px',
      fontSize: '28px',
    });
  if (
    allBlock[0].innerHTML === 'x' &&
    allBlock[4].innerHTML === 'x' &&
    allBlock[8].innerHTML === 'x'
  )
    Notify.success('Cross Winner', {
      width: '500px',
      fontSize: '28px',
    });
  if (
    allBlock[2].innerHTML === 'x' &&
    allBlock[4].innerHTML === 'x' &&
    allBlock[6].innerHTML === 'x'
  )
    Notify.success('Cross Winner', {
      width: '500px',
      fontSize: '28px',
    });
  // ===========0
  if (
    allBlock[0].innerHTML === '0' &&
    allBlock[1].innerHTML === '0' &&
    allBlock[2].innerHTML === '0'
  )
    Notify.success('Zerro Winner', {
      width: '500px',
      fontSize: '28px',
    });
  if (
    allBlock[3].innerHTML === '0' &&
    allBlock[4].innerHTML === '0' &&
    allBlock[5].innerHTML === '0'
  )
    Notify.success('Zerro Winner', {
      width: '500px',
      fontSize: '28px',
    });
  if (
    allBlock[6].innerHTML === '0' &&
    allBlock[7].innerHTML === '0' &&
    allBlock[8].innerHTML === '0'
  )
    Notify.success('Zerro Winner', {
      width: '500px',
      fontSize: '28px',
    });
  if (
    allBlock[0].innerHTML === '0' &&
    allBlock[3].innerHTML === '0' &&
    allBlock[6].innerHTML === '0'
  )
    Notify.success('Zerro Winner', {
      width: '500px',
      fontSize: '28px',
    });
  if (
    allBlock[1].innerHTML === '0' &&
    allBlock[4].innerHTML === '0' &&
    allBlock[7].innerHTML === '0'
  )
    Notify.success('Zerro Winner', {
      width: '500px',
      fontSize: '28px',
    });
  if (
    allBlock[2].innerHTML === '0' &&
    allBlock[5].innerHTML === '0' &&
    allBlock[8].innerHTML === '0'
  )
    Notify.success('Zerro Winner', {
      width: '500px',
      fontSize: '28px',
    });
  if (
    allBlock[0].innerHTML === '0' &&
    allBlock[4].innerHTML === '0' &&
    allBlock[8].innerHTML === '0'
  )
    Notify.success('Zerro Winner', {
      width: '500px',
      fontSize: '28px',
    });
  if (
    allBlock[2].innerHTML === '0' &&
    allBlock[4].innerHTML === '0' &&
    allBlock[6].innerHTML === '0'
  )
    Notify.success('Zerro Winner', {
      width: '500px',
      fontSize: '28px',
    });
}
