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
//recursion(pole);

function multilevel(level)
{
  if(level <2)
  {
    var gpole = [];
    var gcislo = generujCislo(2,5);
    var per;
    for(var i = 0 ; i < gcislo ; i++)
    {
      per = generujCislo(0,1)
      if(per === 0)
      {
	gpole.push(generujCislo(1,100));
      }
      else
      {
	gpole.push([multilevel(level +1)]);
           
      }
    } 
  return gpole;
  }
}

function generujCislo(min,max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

var gpole = multilevel(0);


function vypisPola(gpole,level)
{
  if(level === 0)
  {
  process.stdout.write('[ \n');
  }
  for(var i = 0;i<gpole.length;i++)
  {
    if(Array.isArray(gpole[i]) === true)
    {
      process.stdout.write('\n[ \n');
      vypisPola(gpole[i],level+1);
      process.stdout.write('\n] \n');
    }
    else
    {
      process.stdout.write(gpole[i] + ',' ); 
    }
  }
  if(level === 0)
  {
  process.stdout.write('] \n');
  }
}
var gpole1 = [1,2,3,[4,5,6],[7,8]];
vypisPola(gpole1,0);