const quizDB=[
    {
    question:"Q1: What 10 letter word starts with gas?",
    a:"Retirement",
    b:"Automobile",
    c:"Aberration",
    d:"Television",
    ans:"ans2",
},
{
    question:"Q2: What is 3/7 chicken,2/3 cat and 2/4 goat?",
    a:"Childbirth",
    b:"Chiffon",
    c:"Chicago",
    d:"Chipmunk",
    ans:"ans3",
},
{
    question:"Q3: I'm a 7 letter word.I become longer when my 3rd letter is removed.Guess me.",
    a:"Longing",
    b:"Lounger",
    c:"Lengthy",
    d:"Longine",
    ans:"ans2"
},
{
    question:"Q4: Rina weighs 98 pounds plus half her own weight. How much she weighs?",
    a:"128",
    b:"196",
    c:"192",
    d:"184",
    ans:"ans2"
},
{
    question:"Q5: I start with M,end with X,&have never ending amunt of letters.Who am I?",
    a:"Mix",
    b:"Multiplex",
    c:"Mailbox",
    d:"Matrix",
    ans:"ans3"
}
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const showscore=document.querySelector('#showscore');
const answers=document.querySelectorAll('.answer');

let questioncount=0;
let score=0;
const loadqs=()=>{
    const qslist=quizDB[questioncount];
        question.innerHTML=qslist.question;
        option1.innerHTML=qslist.a;
        option2.innerHTML=qslist.b;
        option3.innerHTML=qslist.c;
        option4.innerHTML=qslist.d;

}
loadqs();
const getCheckAnswer=()=>{
    let answer;

    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
       
    
    });
    return answer;
};
submit.addEventListener('click',()=>{
    const checkedanswer=getCheckAnswer();
    if(checkedanswer==quizDB[questioncount].ans){
        score++;
        
    };
    questioncount++;
    
    if(questioncount < quizDB.length){
        loadqs();}
    else{

        showscore.innerHTML=`
        <h3>You scored ${score}/${quizDB.length} !</h3>
        `;
       
        showscore.classList.remove('show');
    }

});
