//function superbowlWin(): to find() ANY SuperBowl win
//takes an array as an argument
//array of objects so record[1][year]
//record.find(w)
//return the year (record[1][year]) that there is a (w), else return undefined

const record = [
  {year: "2018", result: "L"},
  //{year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(record) {
   let obj1 = record.find(obj => {
    return obj.result === "W";
    });
    if (obj1) {
    return obj1.year
    } else{
      return undefined
    }
}
