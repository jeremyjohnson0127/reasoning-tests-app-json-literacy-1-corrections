import HtmlValidator from 'html-tag-validator';

const allowedTags = ['p', 'strong', 'sub', 'ul', 'li'];

const parse = function(html) {
  return new Promise(function(resolve, reject) {
    HtmlValidator(html, function(err, ast) {
      err ? reject(err) : resolve(ast);
    });
  });
};

const tagsCheck = function(object) {
  if (object.type === 'text') {
    return true;
  }

  if (object.type === 'element' 
    && (allowedTags.indexOf(object.name) === -1)) {

    return false;
  }

  const children = object.children || [];

  return children.reduce(function(output, child) {
    return output && tagsCheck(child);
  }, true);
};

const attributesCheck = function(object) {
  if (Object.keys(object.attributes || {}).length > 0) {
    return false;
  }
  else if (!object.children) {
    return true;
  }

  const children = object.children || [];

  return children.reduce(function(output, child) {
    return output && attributesCheck(child);
  }, true);
};

module.exports = {
  syntax: function(html) {
    return parse(html).then(() => null);
  },

  tags: function(html) {
    return parse(html).then(function(ast) {
      const object = {
        type: 'element',
        name: 'p',
        children: ast.document
      };

      return tagsCheck(object)
        ? Promise.resolve()
        : Promise.reject(new Error(html));
    });
  },

  attributes: function(html) {
    return parse(html).then(function(ast) {
      const object = {
        type: 'element',
        name: 'p',
        children: ast.document
      };

      return attributesCheck(object)
        ? Promise.resolve()
        : Promise.reject(new Error(html));
    });
  }
};
