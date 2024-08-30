const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_9jjg4nq';
   const templateID = 'contact_form';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});


let acc = document.getElementsByClassName("accordion-button");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let body = this.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
    if (body.style.maxHeight) {
      body.style.maxHeight = null;
    } else {
      body.style.maxHeight = body.scrollHeight + "px";
    }
  });
}