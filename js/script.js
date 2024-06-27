

const scroll_line = document.querySelector('.scrollbar');

window.onscroll = () => {

    const { innerHeight, scrollY } = window;
    const { clientHeight } = document.body;
    const height = clientHeight - innerHeight;
    const status = (scrollY / height) * 100;
    console.log(status);
    scroll_line.style.width = status + "%";
}


