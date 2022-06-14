const shuffledNumber = (function(){
                            let numArray=[0];							
							return(function(upper=undefined){							
								let number; 
								let upperfloored;
							    if(upper===undefined)
								{
								   if(numArray.length>1)
								   {
								       number=numArray.pop();
								   }
								   else if(numArray.length==1)
								   {
								       number=0;
								   }
								   return number;
								}
								else if((upperfloored=Math.floor(upper))>0)
								{
								   numArray=[0];								   
								   for(let i=1; i<=upperfloored; i++)
								   {
								      numArray.push(i);
								   }
								   let tempNum;
								   let randNum;
								   for(let i=1; i<=upperfloored; i++)
								   {
									   tempNum=numArray[i];
									   randNum=1+Math.floor(Math.random()*upperfloored);
									   numArray[i]=numArray[randNum];
									   numArray[randNum]=tempNum;
                                   }
                                   return true;								   
								}
								else
								{
                                   return false;
                                }								   
							})
						})()
						
//==================================================================================================================				
						
let upperNumber=20
shuffledNumber(upperNumber)         // This creates a list of shuffled numbers from one to the stated upper number.
for(let index=1; index<=upperNumber; index++)
{
	console.log(shuffledNumber())   // This displays the next shuffled number from the list of shuffled numbers.
}
						
						