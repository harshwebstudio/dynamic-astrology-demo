/* =========================================================
   AURA VEDIC ASTROLOGY
   LIGHTWEIGHT FRONTEND JAVASCRIPT
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle =
  document.getElementById("menuToggle");

const navMenu =
  document.getElementById("navMenu");


if (menuToggle && navMenu) {

  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        navMenu.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    }
  );


  navMenu.querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          navMenu.classList.remove("open");

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    });

}


/* ================= SERVICE → BOOKING ================= */

const serviceButtons =
  document.querySelectorAll(".service-book");

const serviceSelect =
  document.getElementById("service");


serviceButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const service =
        button.dataset.service;

      if (serviceSelect) {

        serviceSelect.value =
          service;

      }

      const bookingSection =
        document.getElementById("booking");

      if (bookingSection) {

        bookingSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    }
  );

});


/* ================= DATE LIMIT ================= */

const dateInput =
  document.getElementById("date");


if (dateInput) {

  const today =
    new Date();

  const year =
    today.getFullYear();

  const month =
    String(
      today.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      today.getDate()
    ).padStart(2, "0");

  const formattedDate =
    `${year}-${month}-${day}`;

  dateInput.min =
    formattedDate;

}


/* ================= BOOKING FORM ================= */

const bookingForm =
  document.getElementById("bookingForm");


if (bookingForm) {

  bookingForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const formData =
        new FormData(
          bookingForm
        );


      const booking = {

        name:
          formData.get("name"),

        phone:
          formData.get("phone"),

        service:
          formData.get("service"),

        date:
          formData.get("date"),

        time:
          formData.get("time"),

        question:
          formData.get("question"),

        createdAt:
          new Date().toISOString()

      };


      /*
       * IMPORTANT:
       *
       * This is ONLY a frontend demo.
       *
       * We are NOT pretending this is
       * a real payment confirmation.
       *
       * In the next stage:
       *
       * Website
       *    ↓
       * Supabase
       *    ↓
       * Payment Gateway
       *    ↓
       * Webhook Verification
       *
       * will be connected.
       */


      try {

        const existing =
          JSON.parse(
            localStorage.getItem(
              "auraBookings"
            ) || "[]"
          );


        existing.push(
          booking
        );


        localStorage.setItem(
          "auraBookings",
          JSON.stringify(existing)
        );


        alert(
          "Booking details saved for demo. Payment gateway will be connected in the next step."
        );


        bookingForm.reset();


      } catch (error) {

        console.error(
          "Booking error:",
          error
        );

        alert(
          "Something went wrong. Please try again."
        );

      }

    }
  );

}


/* ================= FAQ ================= */

const faqQuestions =
  document.querySelectorAll(
    ".faq-question"
  );


faqQuestions.forEach(
  question => {

    question.addEventListener(
      "click",
      () => {

        const currentItem =
          question.parentElement;


        document
          .querySelectorAll(".faq-item")
          .forEach(item => {

            if (
              item !== currentItem
            ) {

              item.classList.remove(
                "active"
              );

            }

          });


        currentItem.classList.toggle(
          "active"
        );

      }
    );

  }
);


/* ================= WHATSAPP ================= */

/*
 * Replace 919999999999 everywhere
 * with the client's actual WhatsApp number.
 */


/* ================= PAGE LOAD ================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    console.log(
      "Aura Vedic website loaded successfully."
    );

  }
);
