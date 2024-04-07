import os
import json

CURRENT_DIR = os.path.dirname(os.path.realpath(__file__))
PATH_OF_COURSES = os.path.join(CURRENT_DIR, "../json/courses/")

if not os.path.exists(PATH_OF_COURSES):
    os.makedirs(PATH_OF_COURSES)
    
while True:
    name_of_course = input("Enter name of course: ")
    print()
    
    course_file_path = os.path.join(PATH_OF_COURSES, name_of_course + ".json")

    if os.path.exists(course_file_path):
        print("Course already exists!")
        print("Please, choose another name of course!")
        print()
        continue
    else:
        break
    
    

icon = input("Enter icon of course separated by ,: ")
print()
icon = icon.split(",")
lessons = []

while True:
    lessons_quantity = input("Enter how many lessons: ")
    print()
    
    if lessons_quantity.isdigit() and int(lessons_quantity) != 0:
        lessons_quantity = int(lessons_quantity)
        break
    else:
        continue
    
for lesson in range(lessons_quantity):
    lesson_name = input("Enter name of lesson: ")
    lesson_link = input("Enter link of lesson: ")
    print()
    
    lessons.append({
        "id": lesson + 1,
        "title": lesson_name,
        "video": lesson_link
    })


course = {
    "title": name_of_course,
    "icon": icon,
    "lessons": lessons
}

with open(course_file_path, "w") as file:
    json.dump(course, file, indent=4)
    print("Course created successfully!")
    exit()