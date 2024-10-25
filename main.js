// let globalCounter = 0
// function eliglobalCounter()
// try{
// globalCounter++
// console.log(globalCounter)
// eliglobalCounter()
// } 
// catch(error) {
// console.error("error occured:", error)
// console.log("value of globalCounter:", globalCounter)
// }

// function flatArr(arr) {
//   var flat = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flat = flat.concat(flatArr(arr[i]));
//     } else {
//       flat.push(arr[i]);
//     }
//   }
//   return flat;
// }

// const tArray = [1, 2, [3, 4, 5, [6, 7]]];

// function flatArr(arr) {
//   function tramp(fn) {
//     while (typeof fn === "function") {
//       fn = fn();
//     }
//     return fn;
//   }

//   function flat(arr, acc) {
//     if (arr.length === 0) return acc;
//     let [first, ...rest] = arr;
//     if (Array.isArray(first)) {
//       return () => flat(first.concat(rest), acc);
//     } else {
//       return () => flat(rest, acc.concat(first));
//     }
//   }

//   return tramp(() => flat(arr, []));
// }

// console.log(flatArr(tArray));


const list = document.querySelector("ol");

function aPrime(n) {
  arr = [];
  if (n >= 2) {
    arr.push(2);
  }
  if (n >= 3) {
    arr.push(3);
  }
  for (let i = 4; i < n; i++) {
    let isPrime = true;
    for (let k = 2; k <= Math.sqrt(i); k++) {
      if (i % k === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      li = document.createElement("li");
      li.textContent = i;
      list.appendChild(li);
    }
  }
  console.log(arr);
  return arr;
}

setTimeout(aPrime(10000)), 0;
 
