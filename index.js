function theBeatlesPlay( musicians, instruments ) {
  var arr = [];

  for ( let i = 0; i < musicians.length; i++ ) {
    arr.push( `${musicians[i]} plays ${instruments[i]}`);
  }

  return arr;
}

function johnLennonFacts( facts ) {
  let counter = 0;

  while ( counter < facts.length ) {
    facts[counter] = facts[counter] + "!!!";
    counter++;
  }

  return facts;
}
