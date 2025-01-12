function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❅';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 5 + 's'; // Between 5-8s
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Between 10-20px

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

function snow() {
    setInterval(createSnowflake, 200);
}

window.addEventListener('load', snow);