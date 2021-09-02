let arr = [-5, -9, 10, 1, 5, 7, -2, -3, 6, -8, 9, 12, 11, -35, 11, -40, -5, 50, -60, 10]

let psum = []
let sum1 = 0;
let sum2 = 0;
let count = 0;
for (let n = 0;n < arr.length;n++) {
    if (arr[n] < 0) {
        count += 1
        sum1 += arr[n]
        if (arr[n + 1] >= 0 || arr[n + 1] == null) {
            psum.push([sum1, n + 1 - count, count])
            sum1 = 0;
            count = 0;
        }
    } else {
        count += 1
        sum2 += arr[n]
        if (arr[n + 1] < 0 || arr[n + 1] == null) {
            psum.push([sum2, n + 1 - count, count]);
            sum2 = 0;
            count = 0;
        }
    }
}
if (psum[0][0] < 0) psum.shift()
console.log(psum)
check(0)
function check(a) {
    for (a;a < psum.length - 1;a++) {
        /* console.log(psum[a+1][0] + psum[a+2][0]) */
        if (psum[a + 1][0] + psum[a + 2][0] < 0) {
            // console.log(psum[a + 1][0] + psum[a + 2][0])
            return check(a + 2)
        }
        else {
            psum[a + 2][0] = psum[a + 2][0] + psum[a][0] + psum[a + 1][0]
            psum[a + 2][1] = psum[a][1]
            psum[a + 2][2] = psum[a][2] + psum[a + 1][2] + psum[a + 2][2]
            // console.log(psum)
            return check(0)
        }
    }
}
console.log(psum)
console.log(arr)
let arr = [ -5, -9, 10, 1, 5, 7, -2, -3, 6, -8, 9, 12, 11, -35, 11, -40, -5, 50, -60, 10]
let pam=[]
let psum=[]
let sum1=0;
let sum2=0;
let count = 0;
let i=0;
let j=0;
for ( let m =0; m< arr.length; m++){
	arr[m] <0 ? pam.push(m): ''
}

for (let n=0; n<arr.length; n++){
	if (arr[n] <0) {
  	count +=1
  	sum1 += arr[n]
     if(arr[n+1] >= 0 || arr[n+1] ==null) {
      psum.push([sum1,n+1 -count , count ])
      sum1 =0;
      count =0;
     }
  }else{
  	count +=1
  	sum2 += arr[n]
    if(arr[n+1] < 0 || arr[n+1] ==null) {
      psum.push([sum2,n+1 -count , count ]);
      sum2 =0;
      count =0;
     }
  }
}
if (psum[0][0]<0) psum.shift()
console.log(psum)
check(0)

function check (a) {
	for (a; a < psum.length-3;a++){
  	/* console.log(psum[a+1][0] + psum[a+2][0]) */
  	if(psum[a+1][0] + psum[a+2][0] < 0) {
    	console.log(psum[a+1][0] + psum[a+2][0])
    	return check(a+1)
    }
    else {
    	psum[a+2][0] = psum[a+2][0] + psum[a][0] +psum[a+1][0]
      psum[a+2][1] =psum[a][1]
      psum[a+2][2] = psum[a][2]+psum[a+1][2] +psum[a+2][2]
      console.log(psum)
      return check (a)
    }
  }
}



console.log(psum)
console.log(arr) 
