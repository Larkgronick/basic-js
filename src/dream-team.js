module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false ){
    return false;
  } else{
  var stringCheck = members.filter(item => typeof item === 'string' && item !== '') //remove non-string values
  var spaceRemove = stringCheck.map((item)=> item.trim()); // remove white-spaces
  var firstLetterReceive  = spaceRemove.map((firstLetter) => firstLetter.charAt(0)); //receive first letter's
  var dreamTeam = firstLetterReceive.map((item)=>item.toUpperCase()).sort().join('') // dream team complete =)
  return dreamTeam;
  }

};