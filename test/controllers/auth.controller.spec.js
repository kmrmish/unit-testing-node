var assert = require('assert');
var authController = require('../../controllers/auth.controller');

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
            assert.equal(false, authController.isAuthorized('admin'));
        });

        it('Should return true if authorized', function(){
            authController.setRoles(['user','admin']);
            assert.equal(true, authController.isAuthorized('admin'));
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
                assert.equal(false, isAuth);
                done();
            });
        });
    });
});