const main_section = document.getElementById("main-section");
const navigation = main_section.querySelector(".course-navigation")
const content = main_section.querySelector(".content")
const content_heading = content.querySelector(".heading")
const content_video = content.querySelector(".video")

// Read URL parameters to get the requested course
const urlParams = new URLSearchParams(window.location.search);
const course = urlParams.get('course');

let requested_course = `../json/courses/${course}.json`


/* fetch the requested json file */

fetch(requested_course)
.then((response) => response.json())
.then((data) => {
    data.forEach((course) => {
        const name = course.title
        const lessons = course.lessons

        document.title = `ElCalvoYT - ${name}`

        courseIcon = document.createElement("i");
        courseIcon.classList.add("icon")
        course.icon.forEach(className => {
            courseIcon.classList.add(className)
        });

        navigation.appendChild(courseIcon)

        
        lessons.forEach(lesson => {
            const li = document.createElement("li")
            li.classList.add("nav-item")

            const a = document.createElement("a")
            a.innerText = lesson.title
            a.setAttribute("lesson", lesson.id)

            a.addEventListener("click", (e) => {
                e.preventDefault()
            })
            
            li.addEventListener("click", (e) => {
                e.preventDefault()

                // remove all active classes from the navegation items
                const active_items = navigation.querySelectorAll(".active")
                active_items.forEach(item => {
                    item.classList.remove("active")
                });

                // add active class to current clicked link
                li.classList.add("active")

                // update the content heading and video source
                const selected_lesson = lessons.find(set => set.id === Number(a.getAttribute("lesson")));
                
                content_heading.innerText = selected_lesson.title
                content_video.src = selected_lesson.video
            })
            
            
            
            li.appendChild(a)
            navigation.appendChild(li)
        });
        
        const first_lesson = lessons[0]

        content_heading.innerText = first_lesson.title
        content_video.src = first_lesson.video
        navigation.children[0].classList.add("active")

    });
})

window.scrollTo({
    top: 0, 
    behavior: 'smooth'
});