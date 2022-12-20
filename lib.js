const [LOG, WARN, ERR] = [0, 1, 2];

function print(obj, stat=LOG) {
  const msg = Array.isArray(obj) ? obj.toString() : obj;
  switch (stat) {
    case LOG:   console.log(msg);   break;
    case WARN:  console.warn(msg);  break;
    case ERR:   console.error(msg); break;
    default:    console.log(msg);
  }
}

function debug(obj=' ') { console.warn(obj); }

function printLn(max=50, ch='-') {
  const temp = [];
  for(let i=0; i<max; ++i) temp.push(ch);
  console.log(temp.join(''));
}

const isAlfa = ch => (('a' <= ch) && (ch <= 'z')) || (('A' <= ch) && (ch <= 'Z'));
const isDigit = ch => ('0' <= ch) && (ch <= '9');

const even = n => !(n % 2);
const odd = n => n % 2;

const random = (max=100, min=0) => Math.trunc( Math.random() * (max-min) + min);

const reverse = str => str.split('').reverse().join('');

function shuffle(arr) {
  for(let i=0; i<arr.length; i++) {
    const r = random(arr.length);
    const t = arr[i]
    arr[i] = arr[r];
    arr[r] = t;
  }
  return arr;
}

function isPolindrom(str) {
  for(let i=0, j=str.length-1; i<j; ++i, --j)
    if(str[i] !== str[j])
      return false;
  return true;
}

function count(str, ch) {
  let cem = 0;
  for(let i=0; i<str.length; ++i)
    if(str[i] === ch) ++cem;
  return cem;
}

function intArray(arr) {
  for(let i=0; i<arr.length; ++i)
    arr[i] = parseInt( arr[i] );
  return arr;
}

function isNumber(str) {
  return !isNaN( Number(str) );
  // let point = false;
  // for(let i=0; i<str.length; ++i)
  //   if( !isDigit(str[i]) ) {
  //     if( (str[i] === '.') && !point ) {
  //       point = true;
  //     } else return false;
  //   }
  // return true;
}

function printMatris(arr) {
  const result = [];
  for(let i=0; i<arr.length; i++) {
    const temp = [];
    for(let j=0; j<arr[i].length; j++)
      temp.push(arr[i][j]);
    result.push( temp.join('\t') );
  }
  console.log( result.join('\n') );
}

Array.prototype.insert = (i, e) => { this.splice(i, 0, e); }
