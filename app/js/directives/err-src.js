function ErrSrc() {

  return {
    link: function (scope, element, attrs) {
      element.bind('error', function () {
        if (attrs.src != attrs.errSrc) {
          attrs.$set('src', attrs.errSrc);
        }
      });
    }
  }
}

export default {
  name: 'errSrc',
  fn: ErrSrc
};
