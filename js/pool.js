(function(){

function Pool(objects){
    this.queue = [];
    this.objects = objects;
};

Pool.prototype.add = function(object){
    this.objects.push(object);
    this.call();
};

Pool.prototype.call = function(){
    if(this.objects.length && this.queue.length){
        var fn = this.queue.shift(),
            obj = this.objects.shift();
            
        fn(obj, this);
    }
};

Pool.prototype.act = function(fn){
    this.queue.push(fn);
    this.call();
};

this.Pool = Pool;

}());