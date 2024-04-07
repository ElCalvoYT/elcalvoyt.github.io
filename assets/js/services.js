const services_container = document.getElementById("services-container");

/* fetch the json file and insert a card for each service */

fetch("assets/json/services.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((service) => {
      const card = document.createElement("div");
      card.classList.add("services-box");

      const type = document.createElement("div")
      type.classList.add("type");

      const typeService = document.createElement("p");
      typeService.innerText = service.type;

      const i = document.createElement("i");
      service.icon.forEach(iconClass => {
        i.classList.add(iconClass);
      });

      const h3 = document.createElement("h3");
      h3.innerText = service.title;

      const p = document.createElement("p");
      p.innerText = service.description;

      const a = document.createElement("a");
      a.classList.add("btn");

      if (service.type == "course") {

        a.href = `assets/html/course.html?course=${service.link}`;

      }


      if (service.type == "course" && service.pay != true) {

        a.innerText = "Start for Free";
        
      } else if (service.type == "service"){
        
        a.href = "#contact";
        a.innerText = "Contact Me!";

        const subject = "Request for: " + service.title + " Service";
        a.classList.add("service-btn-contact");
        a.dataset.subject = subject;
        
        a.addEventListener("click", () => {
          const subjectInput = document.getElementById('subject');
          subjectInput.value = subject;
        });

      } else {

        a.innerText = "Read More";

      }

      if (service.status == false) {
        a.innerText = "Coming Soon!";
        a.classList.add("btn-disabled");
        a.addEventListener("click", (e) => {
          e.preventDefault();
        })
      }

      type.appendChild(typeService);
      card.appendChild(type);
      card.appendChild(i);
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(a);
      services_container.appendChild(card);

    });
})