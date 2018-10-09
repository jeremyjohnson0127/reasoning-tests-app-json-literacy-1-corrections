import HtmlValidator from './index.js';

describe('html-validate', function() {
  describe('syntax()', function() {
    it('should allow empty string', function(done) {
      const html = "";

      HtmlValidator.syntax(html)
        .then(() => done())
        .catch(done);
    });

    it('should handle correct version', function(done) {
      const html = "<p>foo</p>";

      HtmlValidator.syntax(html)
        .then(() => done())
        .catch(done);
    });

    it('should handle incorrect version', function(done) {
      const html = "<p>foo";

      HtmlValidator.syntax(html)
        .then(() => done(new Error('Wrong behavior')))
        .catch(() => done());
    });
  });

  describe('tags()', function() {
    it('should allow empty string', function(done) {
      const html = "";

      HtmlValidator.tags(html)
        .then(() => done())
        .catch(done);
    });

    it('should allow P tags', function(done) {
      const html = "<p>foo</p>";

      HtmlValidator.tags(html)
        .then(() => done())
        .catch(done);
    });

    it('should allow STRONG tags', function(done) {
      const html = "<strong>foo</strong>";

      HtmlValidator.tags(html)
        .then(() => done())
        .catch(done);
    });

    it('should allow STRONG tags inside P tags', function(done) {
      const html = "<p>foo <strong>bar</strong></p>";

      HtmlValidator.tags(html)
        .then(() => done())
        .catch(done);
    });

    it('should not allow A tags', function(done) {
      const html = "<a href='#'>foo</a>";

      HtmlValidator.tags(html)
        .then(() => done(new Error('Wrong behavior')))
        .catch(() => done());
    });

    it('should not allow A tags inside P tags', function(done) {
      const html = "<p> foo <a href='#'>bar</a></p>";

      HtmlValidator.tags(html)
        .then(() => done(new Error('Wrong behavior')))
        .catch(() => done());
    });

    it('should not allow IMG tags', function(done) {
      const html = "<img src='#'/>";

      HtmlValidator.tags(html)
        .then(() => done(new Error('Wrong behavior')))
        .catch(() => done());
    });

    it('should not allow IMG tags inside P tags', function(done) {
      const html = "<p>foo <img src='#'/></p>";

      HtmlValidator.tags(html)
        .then(() => done(new Error('Wrong behavior')))
        .catch(() => done());
    });
  });

  describe('attributes()', function() {
    it('should allow empty string', function(done) {
      const html = "";

      HtmlValidator.attributes(html)
        .then(() => done())
        .catch(done);
    });

    it('should allow tags without attributes', function(done) {
      const html = "<p>foo</p>";

      HtmlValidator.attributes(html)
        .then(() => done())
        .catch(done);
    });

    it('should not allow tags with attributes', function(done) {
      const html = "<p id='foo'>bar</p>";

      HtmlValidator.attributes(html)
        .then(() => done(new Error('Wrong behavior')))
        .catch(() => done());
    });
  });
});
