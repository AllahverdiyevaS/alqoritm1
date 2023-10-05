const n = parseInt(prompt("Введите число n:"));

if (n === 1) {
  console.log("*");
  O(1);
} else {
  for (let i = 0; i < n; i++) {
    let num = "";
    O(N); //n*n=n^2
    //O(N^2)
    for (let j = 0; j < n; j++) {
      num += "*"; //O(N)
    }
    console.log(num); //O(1)
  }
}

// //==================//
// let n = +prompt("Введите число n:");

// let i = 0;    // O(1)
// let j = 0;   //O(1)
// let a = 0;     //O(1)

// for (i = n/ 2; i <= n; i++) {  //O(N/2)
//   for (j = 2; j <= n; j *= 2) {
//                //O(log2n)                                 //O(n/2 * log2(n))
//                                                      //O(n)*O(logn)
//                                                      //O(n * log(n)).
//     a += n / 2;           //O(1)
//   }
// }

// console.log(`Значение a: ${a}`);   //O(1)
// //======================//

// let n = +prompt("Введите число n:");

// let b = 0;

// for (let i = 0; i < n; i++) {    //O(N)
//   for (let j = n; j > i; j--) {   //O(N)
//     b+= i + j;   /O(1)
//   }                          //n*n=n^2
//                             //O(N^2)
// }

// console.log(`Значение b: ${b}`);  //O(1)
// //=====================//

// let n = +prompt("Введите число n:");

// let c = 0;    //O(1)
// let i = n;    //O(1)

// while (i > 0) {
//   c= c+ i;  O(1)
//   i = Math.floor(i / 2);  O(log2n)
// }

// console.log(`Значение c: ${c}`);    //   O(1)
//                                                   O(log(n))
