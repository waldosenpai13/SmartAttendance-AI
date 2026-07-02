// ======================================
// SMARTATTENDANCE AI
// SCRIPT PREMIUM V2
// ======================================

// NAVBAR DINÁMICO

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ======================================
// ANIMACIONES FADE-UP
// ======================================

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

{
    threshold: 0.15
}

);

document
.querySelectorAll(".fade-up")
.forEach(el => observer.observe(el));

// ======================================
// CONTADORES KPI
// ======================================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
            +counter.getAttribute("data-target");

        const current =
            +counter.innerText;

        const increment =
            target / 80;

        if (current < target) {

            counter.innerText =
                Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// ======================================
// FORMULARIO NETLIFY
// ======================================

const form =
document.getElementById("waitlist-form");

const mensaje =
document.getElementById("mensaje");

function encode(data) {

    return Object.keys(data)

        .map(key =>

            encodeURIComponent(key)
            + "=" +
            encodeURIComponent(data[key])

        )

        .join("&");

}

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const formData =
    new FormData(form);

    fetch("/", {

        method: "POST",

        headers: {

            "Content-Type":
            "application/x-www-form-urlencoded"

        },

        body: encode(
            Object.fromEntries(formData)
        )

    })

    .then(() => {

        mensaje.innerHTML = `

        <div style="
            background:white;
            color:#2563EB;
            padding:18px;
            border-radius:16px;
            margin-top:20px;
            font-weight:600;
            box-shadow:0 10px 30px rgba(0,0,0,.1);
        ">

            ✅ Gracias por registrarte.

            <br><br>

            Hemos recibido tu solicitud de demostración.

            Te contactaremos cuando SmartAttendance AI
            esté disponible para nuevos colegios.

        </div>

        `;

        form.reset();

    })

    .catch(() => {

        mensaje.innerHTML = `

        <div style="
            background:#FEE2E2;
            color:#B91C1C;
            padding:18px;
            border-radius:16px;
            margin-top:20px;
        ">

            ❌ Ocurrió un error.

            Inténtalo nuevamente.

        </div>

        `;

    });

});

// ======================================
// SCROLL SUAVE BOTONES
// ======================================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ======================================
// EFECTO PARALLAX HERO
// ======================================

const blob1 =
document.querySelector(".blob-1");

const blob2 =
document.querySelector(".blob-2");

window.addEventListener("mousemove", (e) => {

    const x =
    e.clientX / window.innerWidth;

    const y =
    e.clientY / window.innerHeight;

    if(blob1){

        blob1.style.transform =
        `translate(${x * 25}px, ${y * 25}px)`;

    }

    if(blob2){

        blob2.style.transform =
        `translate(-${x * 25}px, -${y * 25}px)`;

    }

});

// ======================================
// AÑO AUTOMÁTICO FOOTER (OPCIONAL)
// ======================================

const yearSpan =
document.getElementById("year");

if(yearSpan){

    yearSpan.textContent =
    new Date().getFullYear();

}