var assert = require('assert');

/**
 * should variable sometimes used, so its included
 * (for test case : should allow testing nulls)
 */
// var should = require('chai').should();


/**@description
 * Notice: we are not requiring 'should' here
 * but it still works, becasue should appends itself
 * on the object.prototype for the entire execution
 * of this application
 * 
 * hence 'should' is available everywhere
 */
describe('Basic Mocha Test',function(){
    it('should have property name equals to Mukesh', function(){
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

    it('should be copy of another object (not same)', function() {
        var obj1 = {name: 'Mukesh', gender : 'male'};
        var obj2 = {name: 'Mukesh', gender : 'male'};
        obj1.should.deep.equal(obj2);
    });

    // it('should allow testing nulls', function() {
    //     var iAmNull = null;

        /**
         * below will fail.
         */
        // iAmNull.should.not.exist;

        /**
         * we can use 'should' variable for this
         */
    //     should.not.exist(iAmNull);
    // });


    xdescribe('add without setup/teardown', function(){
        var num;
        beforeEach(function() {
            num = 5;
        });
    
        it('should be 10 when adding 5 to 5', function(){
            num = add(num, 5);
            num.should.equal(10);
        });
    
        xit('should be 12 when adding 7 to 5', function(){
            num = add(num, 7);
            num.should.equal(12);
        });
    });
});

function add(num1, num2){
    return num1 + num2;
}

