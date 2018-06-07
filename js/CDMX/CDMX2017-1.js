console.log(data);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// para todas -0
var nameStudent = '';
var sprintTECH = '';
var sprintHSE = '';
var tmpName = '';

// name
for(var i = 0; i < data.CDMX['2017-1'].students.length; i++){
    // var photo = document.createElement("img");
    // photo.src = element.photo;
    nameStudent += '<li>' + ("Nombre de Studiante: " + (data.CDMX['2017-1'].students[i].name)) + '</li>';    
    // break;
    document.getElementById('name').innerHTML = nameStudent;
    tmpName = data.CDMX['2017-1'].students[i].name;
    
    sprintTECH += '<li>' + ("Tech: ") + '</li>';
    for(var j = 0; j < data.CDMX['2017-1'].students[i].sprints.length; j++){    
        sprintTECH += '<li>' + ("Sprint: " + " : " + (data.CDMX['2017-1'].students[i].sprints[j].number) + " = " + (data.CDMX['2017-1'].students[i].sprints[j].score.tech)); + '</li>';
    }

    document.getElementById('sprint-tech').innerHTML = sprintTECH;
    sprintHSE += '<li>' + ("Hse: ") + '</li>';
    for(var j = 0; j < data.CDMX['2017-1'].students[i].sprints.length; j++){    
        sprintHSE += '<li>' + ("Sprint: " + " : " + (data.CDMX['2017-1'].students[i].sprints[j].number) + " = " + (data.CDMX['2017-1'].students[i].sprints[j].score.hse)); + '</li>';
    }
    document.getElementById('sprint-hse').innerHTML = sprintHSE;

    // var img = document.getElementById('sprint-hse');
    // img.appendChild(photo);
    
};

// console.log(data);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//alumnas inscritas (students)
var studentsInscribed = function students(data) {
    var studentsNumber = data.students.length;
    return studentsNumber;
}
var totalStudents = data.CDMX['2017-1']; 
totalStudents = studentsInscribed(totalStudents);
document.getElementById('students-inscribed-SCL2016').innerHTML = ("Cantidad de estudiantes inscritas CDMX 2017 1: " + totalStudents);

// --------------------------------

function activeStudentsSCL(data) {
    var activeS = 0;
    for (var i = 0; i < data.students.length; i++) {
        if (data.students[i].active == true) {
            activeS++;
        }
    }
    return activeS;
};
// alumanas activas 
var totalTOTALSCL = data.CDMX['2017-1'];
totalTOTALSCL = activeStudentsSCL(totalTOTALSCL);
document.getElementById('students-active-SCL2016').innerHTML = ("Cantidad de estudiantes activas CDMX 2017 1: " + totalTOTALSCL);


///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// --------------------------------

//alumnas inactivas 
function dropoutStu(studentsnumber, activeS) { //(inscritas - activas = inactivas)
    var drops = ((studentsnumber - activeS)); 
    return drops;
}

// % de deserción
var deserter= '';
var dropoutSCL = dropoutStu(totalStudents, totalTOTALSCL);
document.getElementById('students-desertion-SCL2016').innerHTML = ("Cantidad de estudiantes desertoras CDMX 2017 1: " + dropoutSCL);

for(var i = 0; i < data.CDMX['2017-1'].students.length; i++){
    if(data.CDMX['2017-1'].students[i].active == false){
        deserter += '<li>' + (data.CDMX['2017-1'].students[i].name) + '</li>';
    }
    
};
// pintar los nombres de las desertoras
document.getElementById('students-desertion-Percentage-SCL2016').innerHTML = deserter;
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// reutilizo parte del codigo de la deserción
function dropoutStu(studentsnumber, activeS) { //(inscritas - activas = inactivas)
    var drops = ((studentsnumber - activeS)); 
    return drops;
}

// % activas
var actives= '';
var dropoutSCL = dropoutStu(totalStudents, totalTOTALSCL);
document.getElementById('students-desertion-SCL2016').innerHTML = ("Cantidad de estudiantes desertoras CDMX 2017 1: " + dropoutSCL);

for(var i = 0; i < data.CDMX['2017-1'].students.length; i++){
    if(data.CDMX['2017-1'].students[i].active == true){
        actives += '<li>' + (data.CDMX['2017-1'].students[i].name) + '</li>';
    }
    
};
// pintar los nombres de las activas
document.getElementById('name-list-of-active-students').innerHTML = actives;

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// calificaciones tech y hse
// var tech = '';
// var hse = '';
// for(var j = 0; j < data.CDMX['2017-1'].students[i].sprints.length; j++){    
//     tech += '<li>' + ("Sprint: " + " : " + (data.CDMX['2017-1'].students[i].sprints[j].number) + " = " + (data.CDMX['2017-1'].students[i].sprints[j].score.tech)); + '</li>';
// }
// document.getElementById('activeTECH').innerHTML = tech;


// for(var j = 0; j < data.CDMX['2017-1'].students[i].sprints.length; j++){    
//     hse += '<li>' + ("Sprint: " + " : " + (data.CDMX['2017-1'].students[i].sprints[j].number) + " = " + (data.CDMX['2017-1'].students[i].sprints[j].score.hse)); + '</li>';
//     // break;    
// }
// document.getElementById('activeHSE').innerHTML = hse;

/////////////////////////////////////////////////////////////////////////////////////////////
// Cantidad y porcentaje de estudiantes exitosas (superan la meta del 70% y siguen activas)
//alumnas inscritas (students)
var studentsInscribed = function students(data) {
    var studentsNumber = data.CDMX['2017-1'].students.length;
    return studentsNumber;
}
var totalStudents = studentsInscribed;
var quantity = 0;   // cantidad 
var points = 0;
var studentsPorcentage = 0;   // % de estudiantes

//1800 tech
//1200 HSE
//2100

//12000
//8400

for(var i = 0; i < data.CDMX['2017-1'].students.length; i++){

    if(data.CDMX['2017-1'].students[i].active == true){
        for(var j = 0; j < data.CDMX['2017-1'].students[i].sprints.length; j++){    
                points += data.CDMX['2017-1'].students[i].sprints[j].score.tech;
                points += data.CDMX['2017-1'].students[i].sprints[j].score.hse;
        }
        if(points >= 8400){
            quantity++;
        }
        points = 0;
    }
    console.log("Va en el alumno " + (i + 1) + " Y quantity va en " + quantity);
    studentsPorcentage = (quantity * 100) / totalStudents;
    console.log(studentsPorcentage);
};

if (isNaN(studentsPorcentage)) {
    studentsPorcentage = "No hubo Estudiantes arriba del 70%";
    document.getElementById('percentageStudents').innerHTML = studentsPorcentage;
} else {
    document.getElementById('percentageStudents').innerHTML = studentsPorcentage;
    document.getElementById('quantityStudents').innerHTML = quantity;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// El % de estudiantes satisfechas (cumple + supera)
/////El % de estudiantes satisfechas (cumple + supera)
var satisfied = 0;   // cumple + supera
var satisfied1 = 0;
var satisfied2 = 0;
var satisfied3 = 0;
var text = '';       // para guardar el resultado
var text1 = '';
var text2 = '';
var text3 = '';

// 1
for(var i = 0; i < data.CDMX['2017-1'].ratings.length; i++){
    satisfied = data.CDMX['2017-1'].ratings[i].student.cumple + data.CDMX['2017-1'].ratings[i].student.supera;
    text = "El porcentaje de estudiantes satisfechas en el Sprint " +  " fue de %" + satisfied;
};
document.getElementById('Text').innerHTML = text;
///////////////////////////////////////////////////////////////////////////////////////////////////////////