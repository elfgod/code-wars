/* Story

Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

What a bunch of cheapskates!

Can you do it?
Kata

Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.
Examples

    12:00 = 0 degrees

    03:00 = 90 degrees

    06:00 = 180 degrees

    09:00 = 270 degrees

    12:00 = 360 degrees

Notes

    0 <= angle <= 360

*/


var whatTimeIsIt = function(angle) {
  mins = angle * 2;
  h = Math.floor( mins / 60 );
  m = Math.floor( mins % 60 );
  if( h == 0 ) {h = "12"};
  if( h < 10 ) {h = "0"+h};
  if( m < 10 ) {m = "0"+m};
  
  return `${h}:${m}`;
  //return "12:00";
}

/* 
describe("Example Tests", function() {

  it("ex1", function() {  
    Test.assertEquals(whatTimeIsIt(0), "12:00");
  });
  
  it("ex2", function() {  
    Test.assertEquals(whatTimeIsIt(90), "03:00");
  });
  
  it("ex3", function() {  
    Test.assertEquals(whatTimeIsIt(180), "06:00");
  });
  
  it("ex4", function() {  
    Test.assertEquals(whatTimeIsIt(270), "09:00");
  });
  
  it("ex5", function() {  
    Test.assertEquals(whatTimeIsIt(360), "12:00");    
  });

});
*/
