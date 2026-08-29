function planDay(){
    let breakfasts=[
        " chocolate pancakes and fresh juice",
        " pav bhaji ",
        " soaked oats",
           "burrito",
       

    ];

    let activities=[
        "watch a movie",
        " read a book",
        "  complete a crochet project    ",
" reorganize my spotify playlist  ",

    ];

let lunches =[
    " pesto pasta with soda ",
    " ovenbake pizza",
    "biryani",
    " curd rice ",

];

let evenings=[
    "work on my personal project",
    " complete weekend assignments",
    " go for a walk ",
    " organize my room for the  15th time ",
    
];

let dinners=[
    "italian pasta",
    "buldak",
    " whatever mom makes    ",
    " curd rice     ",

];

let breakfast=
breakfasts[Math.floor(Math.random() * breakfasts.length)];

let activity=
activities[Math.floor(Math.random()* activities.length)];

let lunch=
lunches[Math.floor(Math.random()*lunches.length)];

let evening=
evenings[Math.floor(Math.random()* evenings.length)];

let dinner=
dinners[Math.floor(Math.random()* dinners.length)];

document.getElementById("result").innerHTML = `
    <h2>Get Your Perfect Day</h2>
    <p> Breakfast: ${breakfast}</p>
    <p>Activity: ${activity}</p>
    <p> Lunch: ${lunch}</p>
    <p> Evening: ${evening}</p>
    <p> Dinner: ${dinner}</p>
`;


}
