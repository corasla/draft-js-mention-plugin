// Get all suggestions that match searchValue
const defaultSuggestionsFilter = (searchValue, suggestions) => {
  const value = searchValue.toLowerCase();
  const filteredSuggestions = suggestions.filter((suggestion) => (
    !value || suggestion.get('name').toLowerCase().indexOf(value) > -1
  ));

  return filteredSuggestions.setSize(filteredSuggestions.size);
};

export default defaultSuggestionsFilter;
