//Remove All The Marked Elements of a List
//https://www.codewars.com/kata/563089b9b7be03472d00002b/train/javascript

Array.prototype.remove_ = function(a, b){
    return a.filter(a => !b.includes(a))
  }
