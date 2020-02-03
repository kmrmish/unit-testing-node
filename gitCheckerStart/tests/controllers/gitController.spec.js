var rewire = require('rewire');
var GitCtrl = rewire('../../controllers/gitController');
var gitController = GitCtrl();
var chai = require('chai');
var sinon = require('sinon');
chai.should();

var getUser;
describe('gitController',function(){
    beforeEach(function(){
        var gitService = GitCtrl.__get__('gitService');
        getUser = sinon.spy(gitService,'getUser');
        GitCtrl.__set__('gitService', gitService);
    });
    it('should get user and repos from git service', function(done){
        // this.timeout(10000);
        var req = {params: {userId: 'kmrmish'}};
        var res = {json: test}

        function test(user) {
            getUser.getCall(0).args[0].should.equal('kmrmish');
            getUser.calledOnce.should.be.true;
            user.login.should.equal('kmrmish');
            done();
        }
        gitController.userGet(req,res);

    });
});