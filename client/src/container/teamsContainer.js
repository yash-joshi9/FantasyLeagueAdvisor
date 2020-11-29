import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Teams from "../component/teams/teams";
import Loader from "../component/Loader/Loading";
import { getTeamDetailsByName, getPlayers } from "../action/team";

class TeamsContainer extends Component {

  async componentDidMount() {
        const {
            details,
            match: {
              params: { team },
            },
            onGetTeamDetailsByName,
            onGetPlayers
          } = this.props;
        if(!details.length) {
            await onGetTeamDetailsByName(team);
        }
    }



    render() {
    const {
      details
    } = this.props;

    return !details.length ? <Loader /> : <Teams {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  const {
    team: { details, players, suggestedTeam },
  } = state;
  return {
    details,
    players,
    suggestedTeam
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({
        onGetTeamDetailsByName:getTeamDetailsByName,
        onGetPlayers: getPlayers
    }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsContainer);
