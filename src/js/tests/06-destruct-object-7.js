export const test = {
  title: 'Nested object and array destructuring',
  refs: [{
    name: 'developer.mozilla',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Nested_object_and_array_destructuring'
  }],

  first: function () {
    var metadata = {
      title: 'Scratchpad',
      translations: [{
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
      }],
      url: '/en-US/docs/Tools/Scratchpad'
    };

    var englishTitle = metadata.title,
      localeTitle = metadata.translations && metadata.translations.title;
  },
  second: function () {
    var metadata = {
      title: 'Scratchpad',
      translations: [{
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
      }],
      url: '/en-US/docs/Tools/Scratchpad'
    };

    var {title: englishTitle, translations: [{title: localeTitle}]} = metadata;
  }

};