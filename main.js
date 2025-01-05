const expand = document.getElementById('expand-btn');
const collapse = document.getElementById('collapse-btn');
const navSmall = document.getElementById('nav-small');

collapse.addEventListener('click', () => {
    navSmall.classList.toggle('hidden');
    expand.classList.toggle('hidden');
})

expand.addEventListener('click', () => {
    navSmall.classList.toggle('hidden');
    expand.classList.toggle('hidden');
})