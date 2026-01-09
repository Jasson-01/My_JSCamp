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

// FORMA ANTIGUA
// -------------
// const filtroUbicacion = document.querySelector('select[name="Ubicación"]');
// const todasLasCards = document.querySelectorAll(".job-card");

// filtroUbicacion?.addEventListener("change", function (event) {
//     const ubicacionSeleccionada = event.target.value;

//     todasLasCards.forEach(card => {
//         const metaInfo = card.querySelector(".job-meta")?.textContent || "";

//         // Verificamos si la ubicación seleccionada está dentro del texto de job-meta
//         if (ubicacionSeleccionada === "" || metaInfo.includes(ubicacionSeleccionada)) {
//             card.style.display = "flex"; // Mostramos la card
//         } else {
//             card.style.display = "none"; // Ocultamos la card
//         }
//     });
// });


// FORMA NUEVA
// -------------
const filtroUbicacion = document.querySelector('select[name="Ubicación"]');
const todasLasCards = document.querySelectorAll(".job-card");

filtroUbicacion?.addEventListener("change", function (event) {
    const ubicacionSeleccionada = event.target.value;

    todasLasCards.forEach(card => {
        const metaInfo = card.querySelector(".job-meta")?.textContent || "";

        // Verificamos si la ubicación seleccionada está dentro del texto de job-meta
        const debeMostrarse = ubicacionSeleccionada === "" || metaInfo.includes(ubicacionSeleccionada);

        // Aplicamos la clase dinámicamente
        card.classList.toggle("hidden", !debeMostrarse);
    });
});