const btn = document.getElementById("checkBtn");

btn.addEventListener("click", () => {
    const form = document.forms['f1'];
    const value = form.ageCheck.value;

    if(value >= 18) {
        console.log('Welcome')
    } else {
        alert('Access denied. You must be at least 18 years old')
        console.log('Access denied')
    }
    form.ageCheck.value = ''
})