// Define the obj 'student
student = {
    name : 'Marco',
    surname : 'Silvestri',
    age : '31'
}


// Print all keys + values in student
for (key in student) {
    console.log(key , ':' , student[key])
}