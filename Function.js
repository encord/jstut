var pole = [1,2,3,[4,5,6,[7,8,9],10,11,12],13,14,15]

function recursion(pole)
{

    for(var j = 0; j < pole.length ; j++)
    {
      if(Array.isArray(pole[j]) === true)
      {
	recursion(pole[j])
      }
      else
      {
	console.log(pole[j]);
      }
   }  

}

recursion(pole);