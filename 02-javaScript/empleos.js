// const botones = document.querySelectorAll(".btn-apply")

// botones.forEach(element => {
//     element.addEventListener("click", function responseClick() {
//         alert("Gracias por tu interes. Pronto nos pondremos en contacto contigo.")
//         element.textContent = "¡Aplicado!"
//         element.disabled = true
//     })
// });

//###################################################################################################

// 2da forma recomendada, que pasaria si hariamos 1 millon de "clicks", hariamos 1 millo de eventos ?
// Esta forma usar el contenedor padre y se fija en que lugar hacemos el evento

const jobCarts = document.querySelector(".section-vacantes");

jobCarts?.addEventListener("click", function (event) {
    const element = event.target

    if (element.classList.contains("btn-apply")) {
        alert("Gracias por tu interes. Pronto nos pondremos en contacto contigo.")
        element.textContent = "¡Aplicado!"
        element.disabled = true
    }

})