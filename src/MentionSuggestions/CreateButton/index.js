import React, {
  Component,
  PropTypes,
} from 'react';

export default class CreateButton extends Component {

  static propTypes = {
    clickedCreate: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  clickedCreate = () => {
      this.props.clickedCreate();
  }

  mDown = (me) => {
      me.preventDefault();
  }

  render() {
    const { theme = {} } = this.props;
    const className = this.props.isFocused ? theme.mentionCreateButtonFocused : theme.mentionCreateButton;
    return (
        <button onClick={this.clickedCreate}
                onMouseDown={this.mDown}
                className={className}>
                + Create Tag
        </button>
    );
  }
}
