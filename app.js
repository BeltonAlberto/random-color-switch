// selecting the elements

const title = document.querySelector('.text-color');
const button = document.querySelector('.btn');

// Event

button.addEventListener('click', () => {
    const NUMS = '1234567890ABCDEF';
    let newNum = '';
    for (let i = 0; i <= 5; i++) {
        newNum += NUMS[~~(Math.random() * NUMS.length)];
    }
    document.body.style.backgroundColor = `#${newNum}`;
    title.innerText = document.body.style.backgroundColor;
});
