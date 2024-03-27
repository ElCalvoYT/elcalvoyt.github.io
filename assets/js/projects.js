const projects_container = document.getElementById("projects-container");

/* fetch the json file and insert a card for each project */

fetch("assets/json/projects.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((project) => {

      const card = document.createElement("div");
      card.classList.add("project-box");

      const img = document.createElement("img");
      img.src = project.image;

      const languages = document.createElement("div");
      languages.classList.add("languages");

      project.language.forEach((language) => {
        const language_img = document.createElement("img");
        language_img.src = `assets/images/languages/${language}.png`;
        languages.appendChild(language_img);
      })

      const project_layer = document.createElement("div");
      project_layer.classList.add("project-layer");

      const title = document.createElement("h4");
      title.textContent = project.title;

      const description = document.createElement("p");
      description.textContent = project.description;

      const link = document.createElement("a");
      link.href = project.link;
      link.setAttribute("target", "_blank");

      const link_icon = document.createElement("i");
      link_icon.classList.add("bx", "bx-link-external");

      card.appendChild(img);
      card.appendChild(languages);
      project_layer.appendChild(title);
      project_layer.appendChild(description);
      link.appendChild(link_icon);
      project_layer.appendChild(link);
      card.appendChild(project_layer);
      projects_container.appendChild(card);

    });
})