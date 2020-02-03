var chai = require('chai'), 
    sinon = require('sinon'),
    https = require('https');

var PassThrough = require('stream').PassThrough;
var gitJson = {
    "login": "kmrmish",
    "id": 8567679,
    "node_id": "MDQ6VXNlcjg1Njc2Nzk=",
    "avatar_url": "https://avatars2.githubusercontent.com/u/8567679?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kmrmish",
    "html_url": "https://github.com/kmrmish",
    "followers_url": "https://api.github.com/users/kmrmish/followers",
    "following_url": "https://api.github.com/users/kmrmish/following{/other_user}",
    "gists_url": "https://api.github.com/users/kmrmish/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kmrmish/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kmrmish/subscriptions",
    "organizations_url": "https://api.github.com/users/kmrmish/orgs",
    "repos_url": "https://api.github.com/users/kmrmish/repos",
    "events_url": "https://api.github.com/users/kmrmish/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kmrmish/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2014-08-27T11:01:28Z",
    "updated_at": "2020-01-31T12:28:28Z"
  };
var repoJson = {
    "id": 150102151,
    "node_id": "MDEwOlJlcG9zaXRvcnkxNTAxMDIxNTE=",
    "name": "MyMVC",
    "full_name": "kmrmish/MyMVC",
    "private": false,
    "owner": {
      "login": "kmrmish",
      "id": 8567679,
      "node_id": "MDQ6VXNlcjg1Njc2Nzk=",
      "avatar_url": "https://avatars2.githubusercontent.com/u/8567679?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/kmrmish",
      "html_url": "https://github.com/kmrmish",
      "followers_url": "https://api.github.com/users/kmrmish/followers",
      "following_url": "https://api.github.com/users/kmrmish/following{/other_user}",
      "gists_url": "https://api.github.com/users/kmrmish/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/kmrmish/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/kmrmish/subscriptions",
      "organizations_url": "https://api.github.com/users/kmrmish/orgs",
      "repos_url": "https://api.github.com/users/kmrmish/repos",
      "events_url": "https://api.github.com/users/kmrmish/events{/privacy}",
      "received_events_url": "https://api.github.com/users/kmrmish/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/kmrmish/MyMVC",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/kmrmish/MyMVC",
    "forks_url": "https://api.github.com/repos/kmrmish/MyMVC/forks",
    "keys_url": "https://api.github.com/repos/kmrmish/MyMVC/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/kmrmish/MyMVC/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/kmrmish/MyMVC/teams",
    "hooks_url": "https://api.github.com/repos/kmrmish/MyMVC/hooks",
    "issue_events_url": "https://api.github.com/repos/kmrmish/MyMVC/issues/events{/number}",
    "events_url": "https://api.github.com/repos/kmrmish/MyMVC/events",
    "assignees_url": "https://api.github.com/repos/kmrmish/MyMVC/assignees{/user}",
    "branches_url": "https://api.github.com/repos/kmrmish/MyMVC/branches{/branch}",
    "tags_url": "https://api.github.com/repos/kmrmish/MyMVC/tags",
    "blobs_url": "https://api.github.com/repos/kmrmish/MyMVC/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/kmrmish/MyMVC/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/kmrmish/MyMVC/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/kmrmish/MyMVC/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/kmrmish/MyMVC/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/kmrmish/MyMVC/languages",
    "stargazers_url": "https://api.github.com/repos/kmrmish/MyMVC/stargazers",
    "contributors_url": "https://api.github.com/repos/kmrmish/MyMVC/contributors",
    "subscribers_url": "https://api.github.com/repos/kmrmish/MyMVC/subscribers",
    "subscription_url": "https://api.github.com/repos/kmrmish/MyMVC/subscription",
    "commits_url": "https://api.github.com/repos/kmrmish/MyMVC/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/kmrmish/MyMVC/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/kmrmish/MyMVC/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/kmrmish/MyMVC/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/kmrmish/MyMVC/contents/{+path}",
    "compare_url": "https://api.github.com/repos/kmrmish/MyMVC/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/kmrmish/MyMVC/merges",
    "archive_url": "https://api.github.com/repos/kmrmish/MyMVC/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/kmrmish/MyMVC/downloads",
    "issues_url": "https://api.github.com/repos/kmrmish/MyMVC/issues{/number}",
    "pulls_url": "https://api.github.com/repos/kmrmish/MyMVC/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/kmrmish/MyMVC/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/kmrmish/MyMVC/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/kmrmish/MyMVC/labels{/name}",
    "releases_url": "https://api.github.com/repos/kmrmish/MyMVC/releases{/id}",
    "deployments_url": "https://api.github.com/repos/kmrmish/MyMVC/deployments",
    "created_at": "2018-09-24T12:53:40Z",
    "updated_at": "2018-09-24T13:00:05Z",
    "pushed_at": "2018-09-24T13:00:03Z",
    "git_url": "git://github.com/kmrmish/MyMVC.git",
    "ssh_url": "git@github.com:kmrmish/MyMVC.git",
    "clone_url": "https://github.com/kmrmish/MyMVC.git",
    "svn_url": "https://github.com/kmrmish/MyMVC",
    "homepage": null,
    "size": 722,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "CSS",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "skeleton"
  };
chai.should();

var gitService = require('../../services/gitService')();

describe('GitService', function(){
    describe('GetUser', function(){
        beforeEach(function(){
            this.request = sinon.stub(https,'request');
        });

        it('should return user and repos', function(){
            this.timeout(10000);
            var gitResponse = new PassThrough();
            gitResponse.write(JSON.stringify(gitJson));
            gitResponse.end();

            var repoResponse = new PassThrough();
            repoResponse.write(JSON.stringify(repoJson));
            repoResponse.end();

            this.request
            .onFirstCall().callsArgWith(1,gitResponse).returns(new PassThrough())
            .onSecondCall().callsArgWith(1,repoResponse).returns(new PassThrough());

            return gitService.getUser('kmrmish').then(
                function(user) {
                    user.login.should.equal('kmrmish');
                    user.should.have.property('repos');
                }
            );
        });

        afterEach(function(){
            this.request.restore();
        });
    });
});