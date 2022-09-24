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
//console.log("months[1]: " + months[1]);

let vowels = ["A", "E", "I", "O", "U"];

const firstCode = (person) => {
  let firstCode = [];
  let surname = person.surname.toUpperCase();
  //console.log(surname);
  let a = 0;
  let b = "";
  for (let i = 0; i < surname.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (surname[i] == vowels[j]) {
        //console.log("surname[i]: " + surname[i]);
        //console.log("vowels[j]: " + vowels[j]);
        //console.log("i: " + i);
        //console.log("j: " + j);
        a += 1;
      }
    }
    if (a === 0) {
      firstCode.push(surname[i]);
      b += surname[i];
    }
    a = 0;
    if (firstCode.length === 3) {
      break;
    }
  }
  let c = firstCode.length;
  if (firstCode.length < 3) {
    for (let i = 0; i < surname.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
        if (surname[i] == vowels[j]) {
          firstCode.push(surname[i]);
          b += surname[i];
          c += 1;
          //console.log("c: " + c);
          //console.log("firstCode.length : " + firstCode.length);
        }
      }
      if (c === 3) {
        break;
      }
    }
  }
  return b;
};

/*
console.log(firstCode({
  name: "Matt",
  surname: "uy",
  gender: "M",
  dob: "1/1/1900"
}));
*/

const secondCode = (person) => {
  let secondCode = [];
  let name = person.name.toUpperCase();
  //console.log(name);
  let a = 0;
  let b = "";
  for (let i = 0; i < name.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (name[i] == vowels[j]) {
        //console.log("name[i]: " + name[i]);
        //console.log("vowels[j]: " + vowels[j]);
        //console.log("i: " + i);
        //console.log("j: " + j);
        a += 1;
      }
    }
    if (a === 0) {
      secondCode.push(name[i]);
    }
    a = 0;
  }

  let d = 0;
  for (let i = 0; i < secondCode.length; i++) {
    if (secondCode.length <= 3) {
      b += secondCode[i];
    } else {
      if (i === 1) {
        continue;
      }
      d += 1;
      b += secondCode[i];
      if (d === 3) {
        break;
      }
    }
  }
  let c = secondCode.length;
  if (secondCode.length < 3) {
    for (let i = 0; i < name.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
        if (name[i] == vowels[j]) {
          secondCode.push(name[i]);
          b += name[i];
          c += 1;
          //console.log("c: " + c);
          //console.log("secondCode.length : " + secondCode.length);
        }
      }
      if (c === 3) {
        break;
      }
    }
  }
  //console.log(secondCode);

  return b;
};

/*
console.log(secondCode({
  name: "amoa",
  surname: "uy",
  gender: "M",
  dob: "1/1/1900"
}));
*/

const thirdCode = (person) => {
  let thirdCode = "";
  let gender = person.gender.toUpperCase();
  //console.log("gender: " + gender);
  let dobinDdMm = person.dob;
  dobinDdMm = dobinDdMm.split("/");
  let dob = [dobinDdMm[1], dobinDdMm[0], dobinDdMm[2]].join("/");
  //console.log("dob: " + dob);
  let a = [];
  let dobData = new Date(dob);
  date = dobData.getDate();
  let month = dobData.getMonth();
  month += 1;
  let f = [];
  let h = "";
  let FullYear = dobData.getFullYear();
  FullYear = parseInt(FullYear);
  while (FullYear > 99) {
    f.unshift(FullYear % 10);
    FullYear = parseInt(FullYear / 10);
  }
  f = f[0].toString() + f[1].toString();
  //console.log("typeof f: " + typeof f);
  let g = months[month];
  if (gender === "F") {
    date += 40;
  }
  date = date.toString();
  let dateArr = [];
  for (let i = 0; i < 2; i++) {
    dateArr.push(date[i]);
  }
  if (dateArr[1] === undefined) {
    dateArr[1] = dateArr[0];
    dateArr[0] = "0";
    h = dateArr[0] + dateArr[1];
  } else h = date;
  thirdCode = f + g + h;
  return thirdCode;

  //console.log("h: " + h);
  //console.log("g: " + g);
  //console.log(f);
  //console.log("date: " + date);
  // console.log("typeof date: " + typeof date);
  // console.log("FullYear: " + FullYear);
};

/*
console.log(thirdCode({
  name: "Matt",
  surname: "yu",
  gender: "f",
  dob: "1/12/1950"
}));
*/

function fiscalCode(person) {
  let code1 = firstCode(person);
  let code2 = secondCode(person);
  let code3 = thirdCode(person);
  //console.log("code1.length: " + code1.length);
  //console.log("code1: " + code1);
  if (code1.length < 3) {
    for (let i = code1.length; i < 3; i++) {
      code1 += "X";
    }
  }
  if (code2.length < 3) {
    for (let i = code2.length; i < 3; i++) {
      code2 += "X";
    }
  }
  let finalCode = code1 + code2 + code3;
  return finalCode;
}

console.log(
  fiscalCode({
    name: "Matt",
    surname: "Edabit",
    gender: "M",
    dob: "1/1/1900",
  })
);

console.log(
  fiscalCode({
    name: "Helen",
    surname: "Yu",
    gender: "F",
    dob: "1/12/1950",
  })
);
console.log(
  fiscalCode({
    name: "Mickey",
    surname: "Mouse",
    gender: "M",
    dob: "16/1/1928",
  })
);

const form = document.getElementById("formData")

form.addEventListener("submit", e => {
  e.preventDefault();
  let reqBody = {};
  Object.keys(form.elements).forEach(key => {
      let element = form.elements[key];
      if (element.type !== "submit") {
          reqBody[element.name] = element.value;
      }
  });
  const code = fiscalCode(reqBody)
  document.getElementById("code").innerText = code
  console.log(reqBody); // Call to function for form submission
});