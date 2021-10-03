// https://www.codewars.com/kata/556b85b433fb5e899200003f/train/javascript

function mixedFraction(s){
  let frac = s.split('/');
  let a = frac[0], b = frac[1], neg;
  if(b==0){
    throw new Error('ZeroDivisionError');
  }
  if(a < 0){
    a = -a;
    neg = true;
    if(b < 0){
      b = -b;
      neg = false;
    }
  }
  if(b < 0){
    b = -b;
    neg = true;
  }
  let r = a % b; // Calculate remainder
  // if(r===0) return neg ? -a/b.toString() : a/b.toString();
  if(r === 0){
    if(neg){
      return (-a/b).toString();
    }
    return (a/b).toString();
  }
  let q = (a-r)/b, count = b; // Calculate quotient
  // Fraction reducer
  while(count > 0){
    if(r%count === 0 && b%count===0){
        r /= count;
        b /= count;
    }
    count--;
  }
  if(q===0){
    if(neg){
      return -r.toString()+'/'+b.toString();
    }
    return r.toString()+'/'+b.toString();
  }
  if(neg){
    return -q.toString()+' '+r.toString()+'/'+b.toString();  
  }
  return q.toString()+' '+r.toString()+'/'+b.toString();
}

gcd=(a,b)=> b==0 ? a : gcd(b,a%b);
function mixedFraction(s){
  var [x,y]=s.split("/").map(z=>+z);
  if (y==0) throw "ZeroDivisionError";
  if (x%y==0) return ""+x/y;
  var g=gcd(x,y),add=x/y<0 ? "-" : "";
  x=Math.abs(x/g),y=Math.abs(y/g);
  return add+(x<y ? "" : Math.floor(x/y)+" ")+x%y+"/"+y;
}