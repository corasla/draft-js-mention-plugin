'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Get all suggestions that match searchValue
var defaultSuggestionsFilter = function defaultSuggestionsFilter(searchValue, suggestions) {
  var value = searchValue.toLowerCase();
  var filteredSuggestions = suggestions.filter(function (suggestion) {
    return !value || suggestion.get('name').toLowerCase().indexOf(value) > -1;
  });

  return filteredSuggestions;
};

exports.default = defaultSuggestionsFilter;