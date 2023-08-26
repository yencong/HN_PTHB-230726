//bai1
//let array=["red","green","yelow","black"];
//let str=array.join(',');
//console.log(str);

//bai2
//let inputUser="2,4,5,6,2,4,7"
//let arrayNumber=inputUser.split(",")
//console.log(arrayNumber)
//let result=[]
//for (let i=0;i<arrayNumber.length;i++){
   // const currentElement=arrayNumber[i];
   /// console.log(currentElement)
   // let nextElement=arrayNumber[i+1];
  //  console.log(nextElement)
  //  let checkingCurrentNumber=parseInt(currentElement)%2==0
 //   console.log( checkingCurrentNumber)
 //   let checkingNextNumber=parseInt(nextElement)%2==0
//    console.log( console.log( checkingCurrentNumber))
//if  (checkingCurrentNumber&&checkingNextNumber){
    //result.push(currentElement)
   // result.push("-")
////}else{
 //   result.push(currentElement)
//}console.log
// }console.log(result.join())

//bai3
//let string="The Quick Brown Fox"
//let result=""
//for(let i=0;i<string.lengthi++){
   // const element=string[i];
    //console.log(element)
    //let compareWord=element.toUpperCase()
   // console.log(compareWord)
//if(element==compareWord){
   // console.log("chu hoa");
  //  result += element.toLowerCase()
//}else{
  //  console.log("chu thuong")
    //result += element.toUpperCase()
//}
//}
//console.log(result);

//bai4
//let userIput="1,2,5,6,8,9";
//const arrayNumber=userIput.split(",")
//let sum=0;
//for (let i=0;i<arrayNumber.length ;i++){
//    const element=arrayNumber[i];
 //   sum=sum+Number(element)
//}
//console.log(sum);

//bai5
//let userIput="3,1,5,-6,7,8";
//let arrayString=userIput.split(",")
//let arrayNumber=[]
//for(let index=0;index<arrayString.length;index++){
 //   const element=arrayString[index];
//    const number=Number(element)
//    console.log(number)
///    arrayNumber.push(number)
//}
///console.log(arrayNumber)
//let min=arrayNumber[0]
//console.log(min)
//for(let i=1;i<arrayNumber.length;i++){
 //   const element=arrayNumber[i]
//    console.log(element)
 //   if(element<min){
//        min=element
/////    }
//}
//console.log("gia tri be nhat la:" min);

//bai6
//let number=[1,3,5,6,2,8];
//let userIput="6"
//const isHaveInNumber=number.includes(Number(userIput))
//if(isHaveInNumber){
  //  let index=number.indexOf(Number(userIput))
  //  console.log("nhap vao so" , Number(userIput), "co trong mang o vi tri:" index)
  //  let templateString='nhap vao so ${Number(userIput)} co trong mang o vi tri:$(index)'
  //  console.log(templateString)
//}else{
  // console.log("khong thay so nay")
//}

//bai7
let sheeps=[4,7,300,90,24,50,75]
console.log("day la cuu cua toi:" ,sheeps);

let maxSheep=sheeps[0]
for(let i=1;i<sheeps.length;i++){
  const sheep=sheeps[i]
  if(sheep>maxSheep){
   maxSheep=sheep
  }
}console.log("con lon nhat co kich thuoc ,thien no:", maxSheep );

const indexMaxSheep=sheeps.indexOf(maxSheep);
let newSheep=[]
for (let i=0;i<sheeps.length;i++){
   const element=sheeps[i]
   if(indexMaxSheep==i){
      newSheep.push(8)
   }else{
      newSheep.push(element)
   }
}console.log("sau khi thien thi giam can con:", newSheep);

let maxSheep1=sheeps[0]
for (let i=1;i<sheepApterMonth.length;i++){
   const sheep=sheepApterMonth[i];
   if(sheep>maxSheep1){
      maxSheep1=sheep
   }
}console.log("con lon nhat co kich thuoc ,thien no:", maxSheep1);
console.log("csau khi thien, cuu cua toi hien tai:", newSheep1);

for(let i=0;i<3;i++){
   console.log("month" {i+1});
   let sheepApterMonth=[]
   for(let i=0;i<newSheep1;i++){
      const sheep=newSheep1[i];
      let newSheep=sheep + 50;
      sheepApterMonth.push(newSheep)
   }
   console.log("da duoc mot thang, day la kich thuoc hien tai:", sheepApterMonth);
   
   let maxSheep2=sheeps[0]
   for(let i=1;i<sheepApterMonth.length;i++){
      const sheep=sheepApterMonth[i];
      if(sheep>maxSheep2){
         maxSheep2=sheep
      }
   }console.log("con lon nhat la:", maxSheep2, "thien no");
   const indexMaxSheep1=sheepApterMonth.indexOf(maxSheep2);
  
}


 