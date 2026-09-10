// @problem solves Acronym Builder problem
// @writer Abaidullah 
// @public (can be used)
// @purpose 1) repeition should not be 2) pure listing
class Set{
    constructor(){
        this.dictionary=Object.create(null);//dictionary will hold our set
        this.length=0;
    }
    //this method will check whether a element exists or not
    has(ele){
        const key=this._key(ele);
        return Object.prototype.hasOwnProperty.call(this.dictionary,key);
    }
    _key(ele){
        return String(ele);
    }

    //this will return all the values in the set
    values(){
        return Object.keys(this.dictionary);
    }

    add(ele){
        const key=this._key(ele);
        if(!this.has(ele)){
            this.dictionary[key]=true;
            this.length+=1;

            return true;
        }else{
            return false;
        }
    }
    remove(ele){
        const key=this._key(ele);
        if(this.has(ele)){
            delete this.dictionary[key];
            this.length-=1;
            return true;
        }else{
            return false;
        }
    }
    size(){
        return this.length;
    }
}

function allUnique(s) {
   return new Set(s).size === s.length;
}

