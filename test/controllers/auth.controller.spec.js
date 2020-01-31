
// var assert = require('assert');
var authController = require('../../controllers/auth.controller');
// var expect = require('chai').expect;

//note : should is a function and needs to be executed
var should = require('chai').should(); 

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();


/**@description 
 * try using describe.only() and describe.skip() also
 * this.skip() can also be used on conditional basis
 *      eg: if we dont want a test to run in certain 
 *          environment conditions
*/
describe('AuthController',function(){
    
    beforeEach('setting up roles', function settingUpRoles(){
        authController.setRoles(['user']);
    });

    describe('isAuthrized',function(){
        it('Should return false if not authorized', function(){
            const isAuth = authController.isAuthorized('admin');
            // assert.equal(false, isAuth);
            // expect(isAuth).to.be.false;
            isAuth.should.be.false;
        });

        it('Should return true if authorized', function(){
            authController.setRoles(['user','admin']);
            var isAuth = authController.isAuthorized('admin');
            // assert.equal(true, authController.isAuthorized('admin'));
            // expect(isAuth).to.be.true;
            isAuth.should.be.true;

        });
        it('should not allow get if not allowed');
        it('should allow get if authorized');
    });

    describe('isAuthrizedAsync',function(){
        

        it('Should return false if not authorized', function(done){

            /**@description:  
             * this will now work if we use arrow functions, 
             * mocha suggests not to use arrow functions
             * */ 
            // this.timeout(2500);
            
            authController.isAuthorizedAsync('admin',function(isAuth){
                // assert.equal(false, isAuth);
                // expect(isAuth).to.be.false;
                isAuth.should.be.false;
                done();
            });
        });
    });


    describe('isAuthrizedPromise',function(){
        it('Should return false if not authorized', function(){
            return authController.isAuthorizedPromise('admin').should.eventually.be.false;
        });
    });
});