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

i = 3;
switch (i) {
  case 1:
    i = 1;

  case 2:
    i = 3;
}

console.log('i =', i);
