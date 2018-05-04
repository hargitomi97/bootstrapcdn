'use strict';

const assert = require('assert').strict;
const helpers = require('./test_helpers.js');

describe('404', () => {
    const uri = helpers.runApp('404');
    let response = {};

    before((done) => {
        helpers.prefetch(uri, (res) => {
            response = res;
            done();
        });
    });

    it('works', (done) => {
        assert.strictEqual(response.statusCode, 404);
        done();
    });

    it('valid html', (done) => {
        helpers.assert.validHTML(response, done);
    });

    it('contains authors', (done) => {
        helpers.assert.authors(response, done);
    });

    it('has page header', (done) => {
        helpers.assert.pageHeader('Page Not Found', response, done);
    });
});
