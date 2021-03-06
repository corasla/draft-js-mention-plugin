import React, {
  Component,
  PropTypes,
} from 'react';

export default class Entry extends Component {

  static propTypes = {
    entryComponent: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.mouseDown = false;
  }

  componentDidUpdate() {
    this.mouseDown = false;
  }

  onMouseUp = () => {
    if (this.mouseDown) {
      this.mouseDown = false;
      this.props.onMentionSelect(this.props.mention);
    }
  };

  onMouseDown = (event) => {
    // Note: important to avoid a content edit change
    event.preventDefault();

    this.mouseDown = true;
  };

  render() {
    const { theme = {}, searchValue } = this.props;
    const className = this.props.isFocused ? theme.mentionSuggestionsEntryFocused : theme.mentionSuggestionsEntry;
    const EntryComponent = this.props.entryComponent;
    return (
      <EntryComponent
        className={className}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        role="option"
        theme={theme}
        mention={this.props.mention}
        searchValue={searchValue}
      />
    );
  }
}
