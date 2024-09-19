const quiz = [
    {
    title :"quiz application using javascript",
    question : "javascript scripting language",
    option_a:"object-oriented",
    option_b:"object",
    option_c:"object-based",
    option_d:"none of this",
    answer:"object-oriented"
    },
    {
        title :"quiz application using javascript",
        question : "Which of these is a peripheral device?",
        option_a:". Printer",
        option_b:"CD Rom",
        option_c:"Monitor",
        option_d:"none of this",
        answer:"CD Rom"
        },
        {
            title :"quiz application using javascript",
            question : "RAID stands for:",
            option_a:"Redundant Array of Independent Disks",
            option_b:"Redundant Array of Independent Device",
            option_c:" Redundant Array of Independent Division",
            option_d:"none of this",
            answer:" Redundant Array of Independent Disks "
            },
            {
                title :"quiz application using javascript",
                question : "Driver of computer Hardware are ____?",
                option_a:"Application Software",
                option_b:" Utility Programme",
                option_c:"System software ",
                option_d:"none of this",
                answer:"System software "
                },
]
//questiontag
const questionTag= document.querySelector(".question-tag")
console.log(questionTag);
console.log(questionTag.textContent)
// question
const question = document.querySelector(".question");
console.log(question);
console.log(question.textContent)
// a
const option_a=document.querySelector("#text-option-a")
console.log(option_a);
console.log(option_a.textContent);

// b

const option_b=document.querySelector("#text-option-b")
console.log(option_b);
console.log(option_b.textContent);
// c
const option_c=document.querySelector("#text-option-c")
console.log(option_c);
console.log(option_c.textContent);


// d
const option_d=document.querySelector("#text-option-d")
console.log(option_d);
console.log(option_d.textContent);


// answer

const answer = document.querySelector(".answer")
const submit = document.querySelector(".submit")
let currentQuestion=0;
let score=0;

console.log(quiz[currentQuestion].title)
console.log(quiz[currentQuestion].question)
console.log(quiz[currentQuestion].option_a)
console.log(quiz[currentQuestion].option_b)
console.log(quiz[currentQuestion].option_c)
console.log(quiz[currentQuestion].option_d)


questionTag.textContent=quiz[currentQuestion].title;


question.textContent=quiz[currentQuestion].question;


option_a.textContent=quiz[currentQuestion].option_a;
option_b.textContent=quiz[currentQuestion].option_b;
option_c.textContent=quiz[currentQuestion].option_c;
option_d.textContent=quiz[currentQuestion].option_d;

submit.addEventListener("click",()=>{
    let checkAns=document.querySelector('input[type="radio"]:checked')
    console.log(checkAns);
    

    if(checkAns==null){
        alert("please select an option")
    }
    else{
        if(checkAns.nextElementSibling.textContent==quiz[currentQuestion].answer){
            score++;
        }
    }
    currentQuestion++;
    if(currentQuestion<quiz.length){
questionTag.textContent=quiz[currentQuestion].title;
question.textContent=quiz[currentQuestion].question;
option_a.textContent=quiz[currentQuestion].option_a;
option_b.textContent=quiz[currentQuestion].option_b;
option_c.textContent=quiz[currentQuestion].option_c;
option_d.textContent=quiz[currentQuestion].option_d;
    }
    else{
        alert("your score" + score+"out of"+quiz.length);
        location.reload();
    }
})