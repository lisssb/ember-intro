import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-intro/tests/helpers/start-app';

var application;

module('Acceptance | shows post', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting post.index', function(assert) {
  
  visit('/posts');

  andThen(function() {
    let posts = find('.post');
    assert.equal(posts.length, 9);
  });
});
