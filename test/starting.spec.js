var assert = require('assert');

/**@description
 * Notice: we are not requiring 'should' here
 * but it still works, becasue should appends itself
 * on the object.prototype for the entire execution
 * of this application
 * 
 * hence 'should' is available everywhere
 */
describe('Basic Mocha Test',function(){
    it('should have property name equals to mukesh', function(){
        var obj = {name: 'Mukesh', gender : 'male'};

        obj.should.have.property('name').equal('Mukesh');
    });

    it('should be equal to another object (same)', function(){
        var obj1 = {name: 'Mukesh', gender : 'male'};
        var obj2 = obj1;

        /* below will fail */
        // var obj2 = {name: 'Mukesh', gender : 'male'};

        obj1.should.equal(obj2);
    });

    if('should be copy of another object (not same)', function() {
        var obj1 = {name: 'Mukesh', gender : 'male'};
        var obj2 = {name: 'Mukesh', gender : 'male'};
        obj1.should.equal(obj2);
    });
});