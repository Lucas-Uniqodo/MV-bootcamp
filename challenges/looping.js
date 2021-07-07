const array = ['apples','pears','bananas'];

/* TODO - print the array in reverse order by changing 
  the for loop (do not use the reverse() method!) */

for(i=array.length - 1; i>=0; i--) {
  console.log(array[i]);
}

/* Extra challenge - create a multi-dimensional array and
   try to loop over it - Google this! */

const twoDarray = [['apples','pears','bananas'], ['mango','pineapple','blueberries']];


for(i=0; i<twoDarray.length; i++) {
    for(x=0; x<twoDarray[i].length; x++) {
        console.log(twoDarray[i][x])
  }
}
