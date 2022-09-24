// var arr = [
//   {
//       id: 1,
//   name:"John",
//   obtainedMarks: 78,
//   totalMarks: 100,
//   status:'pass'
// },
//   {
//       id: 2,
//   name:"John wick",
//   obtainedMarks: 77,
//   totalMarks: 100,
//   status:'pass'
// },
//   {
//       id: 3,
//   name:"John doe",
//   obtainedMarks: 76,
//   totalMarks: 100,
//   status:'pass'
// },
//   {
//       id: 4,
//   name:"John sam",
//   obtainedMarks: 32,
//   totalMarks: 100,
//   status:'fail'
// },
//   {
//       id:5,
//   name:"John nimb",
//   obtainedMarks: 22,
//   totalMarks: 100,
//   status:'fail'
// },
//   {
//       id: 6,
//   name:"John snack",
//   obtainedMarks: 11,
//   totalMarks: 100,
//   status:'fail'
// },
//   {
//       id: 7,
//   name:"John shafique",
//   obtainedMarks: 55,
//   totalMarks: 100,
//   status:'pass'
// },
//   {
//       id: 8,
//   name:"John rasheed",
//   obtainedMarks: 66,
//   totalMarks: 100,
//   status:'pass'
// },
//   {
//       id: 9,
//   name:"John Ashfaq",
//   obtainedMarks: 90,
//   totalMarks: 100,
//   status:'pass'
// },

// ]


// const topers = (arr) => { 

//     return arr.filter((item) => item.status === 'pass').sort((a,b) => a.obtainedMarks - b.obtainedMarks).slice(0,3)
//  }

// const failedStudents = (arr) => { 
//     return arr.filter((item) => item.status === 'fail').sort((a,b) => a.obtainedMarks - b.obtainedMarks).slice(0,3)

//  }

//  const returnAllPassed = (arr) => {

//     return arr.filter((item) => item.status === 'pass')
//  }  


// //  console.log(topers(arr))
// // console.log(topers(arr))
// // console.log(failedStudents(arr))
// console.log(returnAllPassed(arr))




const obj ={
  name: "He len",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950",
}
 


const first = (str) => {

  const vovels = ['a', 'e', 'i', 'o', 'u']

  const constonents = str.split('').filter((item) => !vovels.includes(item.toLocaleLowerCase()))
  const vovelS = str.split('').filter((item) => vovels.includes(item.toLocaleLowerCase()))

  let combine = [...constonents, ...vovelS]

  if (combine.length > 3) {
    combine = combine.splice(0, 3).join('').toLocaleUpperCase()
  } else {
    for (let i = combine.length; i < 3; i++) {

      combine = [...combine, 'X'].join('').toLocaleUpperCase()

    }
  }

  return combine
}
const second = (str) => {

  const vovels = ['a', 'e', 'i', 'o', 'u']

  const constonents = str.split('').filter((item) => !vovels.includes(item.toLocaleLowerCase()))
  const vovelS = str.split('').filter((item) => vovels.includes(item.toLocaleLowerCase()))

  let combine = [...constonents, ...vovelS]
  combine[1]= undefined
  if (combine.length > 3) {
    combine = combine.splice(0, 4)
     
    combine = combine.join('').toLocaleUpperCase()
  } else {
    for (let i = combine.length; i < 4; i++) {

      combine = [...combine, 'X'].join('').toLocaleUpperCase()

    }
  }

  return combine
}
const third = (str,gender) => { 
  const months = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "H",
    7: "L",
    8: "M",
    9: "P",
    10: "R",
    11: "S",
    12: "T",
  };
  const year = str.split('/').splice(2,2)[0].split('').splice(2,2).join("")
  const monthIndex = str.split('/').splice(1,1)[0]
  const month =  months[monthIndex]
  let day = 0
  if(gender === "M"){
    
    if(str.split('/').splice(0,1)[0] < 10){
      day = '0'+str.split('/').splice(0,1)[0]
    }
  }
  if( gender === "F"){
    day = 40+ (+str.split('/').splice(0,1)[0])
  }
  return year+month+day
 
}

const fiscalCode = (obj) => { 
  return first(obj.surname)+second(obj.name)+third(obj.dob,obj.gender)
 }

 console.log(fiscalCode(obj))


