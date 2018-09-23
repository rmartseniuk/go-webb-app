
// -*- JavaScript -*-


class PersonItem extends React.Component {
  render() {
    return (
      <tr>
        <td> {this.props.id}    </td>
        <td> {this.props.first} </td>
        <td> {this.props.last}  </td>
      </tr>
    );
  }
}

class PeopleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: [] };
  }

  componentDidMount() {
    this.serverRequest =
      axios
        .get("/people")
        .then((result) => {
           this.setState({ people: result.data });
        });
  }

  render() {
    const people = this.state.people.map((person, i) => {
      return (
        <PersonItem key={i} id={person.Id} first={person.First} last={person.Last} />
      );
    });

    return (
      <div>
        <table><tbody>
          <tr><th>Id</th><th>First</th><th>Last</th></tr>
          {people}
        </tbody></table>
	    <Toggle/>
      </div>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <PeopleList/>,
  document.getElementById('root')
);
