var chai = require('chai'), 
    sinon = require('sinon'),
    https = require('https');

var PassThrough = require('stream').PassThrough;

chai.should();

var gitService = require('../../services/gitService')();

describe('GitService', function(){
    describe('GetUser', function(){
        beforeEach(function(){
            this.request = sinon.stub(https,'request');
        });

        it('should return user and repos', function(){
            this.timeout(10000);
            var gitJson = {login: 'jonathanfmills'};
            var gitResponse = new PassThrough();
            gitResponse.write(JSON.stringify(gitJson));
            gitResponse.end();

            this.request.callsArgWith(1,gitResponse).returns(new PassThrough());

            return gitService.getUser('jonathanfmills').then(
                function(user) {
                    user.login.should.equal('jonathanfmills');
                    // user.should.have.property('repos');
                }
            );
        });

        afterEach(function(){
            this.request.restore();
        });
    });
});