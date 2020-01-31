
// var assert = require('assert');
var authController = require('../../controllers/auth.controller');
// var expect = require('chai').expect;

//note : should is a function and needs to be executed
var should = require('chai').should(); 

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();

var sinon = require('sinon');

/**@description 
 * try using describe.only() and describe.skip() also
 * this.skip() can also be used on conditional basis
 *      eg: if we dont want a test to run in certain 
 *          environment conditions
*/
describe('AuthController',function(){
    
    beforeEach('setting up roles', function settingUpRoles(){
        // authController.setRoles(['user']);
    });

    describe('isAuthrized',function(){
        var user = {};
        beforeEach(function(){
            user = {
                roles : ['user'],
                isAuthorized : function(neededRole) {
                    return this.roles.indexOf(neededRole) >= 0;
                }
            };
            sinon.spy(user,'isAuthorized');
            authController.setUser(user);
        });

        it('Should return false if not authorized', function(){
            const isAuth = authController.isAuthorized('admin');
            // assert.equal(false, isAuth);
            // expect(isAuth).to.be.false;
            user.isAuthorized.calledOnce.should.be.true;
            isAuth.should.be.false;
        });

        it('Should return true if authorized', function(){
            authController.setRoles(['user','admin']);
            const isAuth = authController.isAuthorized('admin');
            // assert.equal(true, authController.isAuthorized('admin'));
            // expect(isAuth).to.be.true;
            user.isAuthorized.calledOnce.should.be.true;
            isAuth.should.be.true;

        });
        it('should not allow get if not allowed');
        it('should allow get if authorized');
    });

    describe('isAuthrizedAsync',function(){
        beforeEach('setting up roles', function settingUpRoles(){
            authController.setRoles(['user']);
        });

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
        beforeEach('setting up roles', function settingUpRoles(){
            authController.setRoles(['user']);
        });
        it('Should return false if not authorized', function(){
            return authController.isAuthorizedPromise('admin').should.eventually.be.false;
        });
    });

    describe('getIndex', function(){
        var user = {};
        beforeEach(function(){
            user = {
                roles : ['user'],
                isAuthorized : function(neededRole) {
                    return this.roles.indexOf(neededRole) >= 0;
                }
            };
        });

        it('should render index if authorized (should be called one time, with argumanet "index")', function(){
            var isAuth = sinon.stub(user, 'isAuthorized').returns(true);
            var req = {user: user};
            var res = {
                render: function(){}
            }

            var mock = sinon.mock(res);
            mock.expects('render').once().withExactArgs('index');

            authController.getIndex(req, res);
            isAuth.calledOnce.should.be.true;

            mock.verify();
        });

        it('should render notAuth if not authorized (should be called one time, with argumanet "notAuth")', function(){
            var isAuth = sinon.stub(user, 'isAuthorized').returns(false);
            var req = {user: user};
            var res = {
                render: sinon.spy()
            }
            authController.getIndex(req, res);
            isAuth.calledOnce.should.be.true;
            res.render.calledOnce.should.be.true;
            res.render.firstCall.args[0].should.equal('notAuth');
        });

        it('should render error if error (should be called one time, with argumanet "error")', function(){
            var isAuth = sinon.stub(user, 'isAuthorized').throws();
            var req = {user: user};
            var res = {
                render: sinon.spy()
            }
            authController.getIndex(req, res);
            isAuth.calledOnce.should.be.true;
            res.render.calledOnce.should.be.true;
            res.render.firstCall.args[0].should.equal('error');
        });
    });
});