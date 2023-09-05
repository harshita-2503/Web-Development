let heroes = [
    ["ironman","spiderman","thor"],
    ["superman","wonderwoman","flash"]
];
for(let i=0;i<heroes.length;i++)
{
    console.log(i, heroes[i]);
    for(let j=0;j<heroes[i].length;j++)
    {
        console.log(`j=${j}, ${heroes[i][j]}`);

    }
}

//Example-2

let student=[["aman",95],["karan",40],["harshita",90]];
for(let i=0;i<student.length;i++)
{
    console.log(`info of a student #${i+1}`);
    for(j=0;j<student[i].length;j++)
    {
        console.log(student[i][j]);
    }
}