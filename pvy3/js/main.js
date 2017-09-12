

function listOfAnimals(data, start, count){
    try{
        if(isNaN(start) || isNaN(count)) throw "not a number";
        if(start < 0) throw "cannot bejaj";
        if(start > data.lenght-1) throw "cannnot be greterfkjbdfs";
        if(start+count > data.lenght-1) throw "jhdfsd";
    }
    catch(err) {
        return '<div>Error:'+ err + '</div>';
    }     
    var list = [];
    for(var i = start ; i < start+count ; i++){
        list.push(data[i]);
    }    
    return (list.lenght >0) ? list : '<p>No items</p>';
}


console.log(listOfAnimals(json,0,10));
