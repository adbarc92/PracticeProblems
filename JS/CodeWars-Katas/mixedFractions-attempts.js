// === === === === === === === Attempt 1 === === === === === === ===

// function mixedFraction(s){
//     // Handle the input
//     let all = s.split('/');
//     let top = all[0], bottom = all[1];
//     // Throw error if division by zero
//     if (!bottom) {  // Matches +0, -0, NaN
//       throw new Error("ZeroDivisionError");
//     }
//     let remainder = top % bottom;
//     if(remainder === 0) return (top/bottom).toString();
//     let num = (top - (remainder))/bottom;
//     if(bottom < 0 && remainder < 0){
//         bottom = -bottom;
//         remainder = -remainder;
//       }
//     let start = bottom;
//     while(start > 0){
//       if(remainder % start === 0 && bottom % start === 0){
//           remainder /= start;
//           bottom /= start;
//       }
//       start--;
//     }
//     console.log("num: ",num);
//     console.log("remainder: ",remainder);
//     console.log("bottom: ",bottom);
//     if(num === 0){
//       return remainder.toString()+"/"+bottom.toString();
//     }
//     return num.toString()+" "+remainder.toString()+"/"+bottom.toString();
//   }

  // === === === === === === === Attempt 2 === === === === === === ===

//   function composeMixedFraction(neg, whole, numer, denom){
//     let str = whole.toString()+' '+numer.toString()+'/'+denom.toString();
//     if(neg) return '-'+str;
//     return str;
// }

// function mixedFraction(s){
//     let split = s.split('/');
//     let numer = parseInt(split[0]), denom = parseInt(split[1]), neg;
//     if(numer < 0){
//         neg = true;
//         numer = -numer;
//     }
//     let r = numer % denom;
//     let whole = (numer - r)/denom;
//     numer = r;
//     let countdown = denom;
//     while(countdown > 0){
//         if(numer % countdown === 0 && denon % countdown ===0){
//             numer /= countdown;
//             denom /=countdown;
//         }
//         countdown--;
//     }
//     return composeMixedFraction(neg,whole,numer,denom);
// }

// === === === === === === === Attempt 3 === === === === === === ===

// function mixedFraction(s){
//     // Handle input, get initial numbers
//     let frac = s.split('/');
//     let a = frac[0], b = frac[1];
//     console.log("a: ",a);
//     // Check if denominator is zero
//     if(!b){
//         throw error = new Error("ZeroDivisionError");
//     }
//     let neg = false; // For simplicity, if negative input
//     // If both top and bottom are negative, they cancel
//     if(a < 0 && b < 0){
//         a = !a;
//         b = !b;
//     }
//     // If only the top is negative, note this, then remove it for simplicity
//     else if(a < 0){
//         neg = true;
//         a = !a;
//     }
//     let r = a % b; // Calculate remainder
//     // If remainder is zero
//     if(r === 0){
//         // If numerator is negative, return negative of numerator/denominator
//         if(neg){
//             return !(a/b).toString();
//         }
//         // Else return numerator/denominator
//         return (a/b).toString();
//     }
//     let q = (a-r)/b, count = b; // Calculate quotient
//     if(q === 0){
//         if(neg){
//             return !a/b;
//         }
//         return a/b;
//     }
//     // Reduce remaining fraction
//     while(count > 0){
//         if(r%count === 0 && b%count===0){
//             r /= count;
//             b /= count;
//         }
//         count--;
//     }
//     if(neg){
//         return !q.toString()+' '+r.toString()+'/'+b.toString();
//     }
//     return q.toString()+' '+r.toString()+'/'+b.toString();
// }