const users = {
    "John": {
        age: 24,
        desgination: "Senior Golang Developer",
        interests: ["Chess, Reading Comics, Playing Video Games"],
        qualification: "Masters",
        nationality: "Greenland"
    },
    "Ron": {
        age: 19,
        desgination: "Intern - Golang",
        interests: ["Video Games"],
        qualification: "Bachelor",
        nationality: "UK"
    },
    "Wanda": {
        age: 24,
        desgination: "Intern - Javascript",
        interests: ["Piano"],
        qualification: "Bachaelor",
        nationality: "Germany"
    },
    "Rob": {
        age: 34,
        desgination: "Senior Javascript Developer",
        interests: ["Walking his dog, Cooking"],
        qualification: "Masters",
        nationality: "USA"
    },
    "Pike": {
        age: 23,
        desgination: "Python Developer",
        interests: ["Listing Songs, Watching Movies"],
        qualification: "Bachaelor's Degree",
        nationality: "Germany"
    }
}


/*

Q1 Find all users who are interested in video games.
Q2 Find all users staying in Germany.
Q3 Sort users based on their seniority level 
   for Designation - Senior Developer > Developer > Intern
   for Age - 20 > 10
Q4 Find all users with masters Degree.
Q5 Group users based on their Programming language mentioned in their designation.


*/
const usersArray = Object.entries(users);

//Q1. Find all users who are interested in video games.

const videoGameInt = usersArray.filter((itemData) => {
    let hobbies = itemData[1].interests[0].includes("Video Games");
   
    return hobbies;
}).map((val, ind)=> val[0]);

// console.log(videoGameInt);

//Q2. Find all users staying in Germany.

const stayLocation = usersArray.filter((userData) => {
    return (userData[1].nationality === "Germany");

});
// console.log(stayLocation);

// Q3 Sort users based on their seniority level 
//    for Designation - Senior Developer > Developer > Intern
//    for Age - 20 > 10

let sortedUsers = usersArray.sort((a,b)=>console.log(a))


//Q4 Find all users with masters Degree.

// const degreeMaster = usersArray.filter((userData) => {
//     return (userData[1].qualification === "Masters");
// });
// console.log(degreeMaster);

// Q5 Group users based on their Programming language mentioned in their designation.

