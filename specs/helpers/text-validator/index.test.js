import validator from './index.js';

describe('html-validate', function() {
  describe('syntax()', function() {
    it('should allow text with allowed chars', function(done) {
      const text = "foo bar";

      validator.chars(text)
        .then(() => done())
        .catch(done);
    });

    it('should not allow text with &amp; chars', function(done) {
      const text = "foo &amp; bar";

      validator.chars(text)
        .then(() => done(new Error('Wrong behavior')))
        .catch(() => done());
    });

    it('should not allow text with ∴ chars', function(done) {
      const text = "foo ∴ bar";

      validator.chars(text)
        .then(() => done(new Error('Wrong behavior')))
        .catch(() => done());
    });
  });
});
