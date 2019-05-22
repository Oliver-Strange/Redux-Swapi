import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions

import { getCharacters } from '../actions/index';

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    console.log('cdm happened');
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h2>Finding Characters....</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    isFetching: state.charsReducer.isFetching
  }
}

export default connect(
  mapStateToProps,
  {
    getCharacters
  }
)(CharacterListView);
