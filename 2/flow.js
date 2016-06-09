var i = 0;
if (i > 0) {
  i++;
} else if (i === 0) {
  i--;
} else {
  i += 10;
}

if (i > 0) {
  i++;
} else {
  if (i === 0) {
    i--;
  } else {
    i += 10;
  }
}


var str = 'c';

i = 3;
switch (str) {
  case 'a':
    break;

  case 'b':
    break;

}

console.log('i =', i);
