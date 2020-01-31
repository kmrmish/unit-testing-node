var chai = require('chai'), 
    sinon = require('sinon');

chai.should();

var gitService = require('../../services/gitService')();

describe('GitService', function(){
    describe('GetUser', function(){
        it('should return user and repos', function(){
            this.timeout(10000);
            return gitService.getUser('jonathanfmills').then(
                function(user) {
                    user.login.should.equal('jonathanfmills');
                    user.should.have.property('repos');
                }
            );
        });
    });
});