var pole = [1,2,3,[4,5,6,[7,8,9],10,11,12],13,14,15];

/**
 *Funkcia recursion má vstupný parameter multipole a má vypísat hodnoty po poradí.
 *
 *Funkcia recursion ma vstupný parameter multipole a má vypísať hodnoty zaradom . 
 *@param{Array<Array<Number>>} pole pole obsahuje čísla ktore sa majú vypísať zaradom.
 */
function recursion(pole)
{
  for(var j = 0; j < pole.length ; j++)
  {
    if(Array.isArray(pole[j]) === true)
    {
      recursion(pole[j]);
    }
    else
    {
      console.log(pole[j]);
    }
  }  
}
recursion(pole);