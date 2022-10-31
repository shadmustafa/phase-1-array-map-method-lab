const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

const titleCased =   () => { return tutorials.map( (element) => {
 return  (element.split(' ').map( word => {return word.charAt(0).toUpperCase() + word.slice(1);} )  .join(' ')
                               
         )                  }) ;}

     




        //  const titleCased = () => {
        //   return tutorials.map((element) => {
        //       const split = element.split(" ");
        //       const string= split.map((el) => {
        //         return el.charAt(0).toUpperCase() +  el.slice(1);
        //       });
        //       return string.join(' ');
        //     });
           
        //   }

  // console.log(titleCased);
//  function  titleCased(collections){

//   const tutorials = collections.map(element => {
//     return  (element.split(' ').map( word => {return word.charAt(0).toUpperCase() + word.slice(1);} )  .join(' ')
                                 
//            )                       }) ;
//            return tutorials;
//  }

//  titleCased(tutorials);