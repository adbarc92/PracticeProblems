// Recover toString() here :)

Number.prototype.toString = function(){
	return this + '';
  }
  
  Boolean.prototype.toString = function(){
	return this + '';
  }
  
  Array.prototype.toString = function(){
	return "["+ this.join(',') + "]";
  }

  // Best

  Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString =
function() { return JSON.stringify(this); }