// template_jbmhcfs
// service_6zd1d0o
// IwZ9dkwbz5Ck5hYE2

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
      .sendForm(
        'service_6zd1d0o',
        'template_jbmhcfs',
        event.target,
        'IwZ9dkwbz5Ck5hYE2'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at ethanlian18@gmail.com"
        );
    })    
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}