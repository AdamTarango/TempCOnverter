const convertToCelsius = (farTemp) => {
  Number (farTemp);
  const celTemp = (farTemp - 32) * (5/9);
  return celTemp;
}
const describeTemp = (fartemp) => {
  Number(fartemp);
  if (fartemp < 32){
    return `very cold`;
  }
  else if (fartemp < 64){ 
    return `cold`;
  }
  else if (fartemp < 86){ 
    return `warm`;
  }  
  else if (fartemp < 100){ 
    return `hot`;
  }
  else if (true){
    return `very hot`;

  }

}
const rand = (input) => {
  const randomNumber = Number(inputt) * Math.random();
  return randomNumber
}
const temp = prompt("Input a farenheight temperature")
alert(convertToCelsius (temp))
alert(describeTemp (temp))