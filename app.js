// selecting the elements

const title = document.querySelector('.text-color');
const button = document.querySelector('.btn');
const body = document.querySelector('.body');

// Event

button.addEventListener('click', () => {
    const NUMS = '1234567890';
    let newNum = '';
    for (let i = 0; i <= 5; i++) {
        newNum += NUMS[~~(Math.random() * NUMS.length)];
    }
    body.style.backgroundColor = `#${newNum}`;
    title.innerText = body.style.backgroundColor;
});
