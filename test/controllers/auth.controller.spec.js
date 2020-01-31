var assert = require('assert');
var authController = require('../../controllers/auth.controller');


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