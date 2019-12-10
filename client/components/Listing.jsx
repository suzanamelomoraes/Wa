import React, { Component } from "react";
import { connect } from "react-redux";

import { Card, Grid, Button, Icon, Divider } from "semantic-ui-react";
import MahiSummary from "./MahiSummary";
import Map from "./Map";
import MahiMarker from "./MahiMarker";

import { setError } from "../actions/error";
import { changeActiveTask, getTasks } from "../actions/tasks";

import Notification from "./Notification";

export class Listing extends Component {
  state = {
    mapVisible: null,
    buttonColor: "olive"
  };

  componentDidMount() {
    this.props.getTasks();
    this.props.changeActiveTask(null);
  }

  toggleMap = () => {
    const { mapVisible } = this.state;
    const { changeActiveTask } = this.props;

    this.setState({
      mapVisible: !mapVisible
    });

    changeActiveTask(null);
  };

  render() {
    const { mapVisible, buttonColor } = this.state;
    const { tasks } = this.props;

    return (
      <React.Fragment>
        {mapVisible ? (
          <React.Fragment>
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="left">
                  <Notification />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="right">
                  <Button
                    animated="fade"
                    size="big"
                    color={buttonColor}
                    onClick={this.toggleMap}
                    style={{ marginTop: 40, marginRight: 25 }}
                  >
                    <Button.Content hidden style={{ fontSize: "0.8em" }}>
                      Close Map
                    </Button.Content>

                    <Button.Content visible>
                      <Icon name="map outline" />
                    </Button.Content>
                  </Button>

                  <Divider />
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid>
              <Grid.Column
                width={8}
                style={{
                  height: "100vh",
                  width: "100%",
                  overflow: "scroll"
                }}
              >
                <Card.Group centered>
                  {tasks.map(mahi => {
                    if (mahi.status === "open") {
                      return (
                        <MahiSummary
                          key={mahi.taskId}
                          {...mahi}
                          mapVisible={mapVisible}
                        />
                      );
                    }
                  })}
                </Card.Group>
              </Grid.Column>

              <Grid.Column width={8}>
                <Map>
                  {tasks.map(mahi => {
                    if (mahi.status === "open") {
                      return (
                        <MahiMarker
                          key={mahi.taskId}
                          {...mahi}
                          lat={mahi.latitude}
                          lng={mahi.longitude}
                        />
                      );
                    }
                  })}
                </Map>
              </Grid.Column>
            </Grid>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="left">
                  <Notification />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="right">
                  <Button
                    animated="fade"
                    size="big"
                    color={buttonColor}
                    onClick={this.toggleMap}
                    style={{
                      marginTop: 40,
                      marginRight: 25
                    }}
                  >
                    <Button.Content hidden style={{ fontSize: "0.8em" }}>
                      Open Map
                    </Button.Content>

                    <Button.Content visible>
                      <Icon name="map outline" />
                    </Button.Content>
                  </Button>

                  <Divider />

                  <Card.Group centered>
                    {tasks.map(mahi => {
                      if (mahi.status === "open") {
                        return (
                          <MahiSummary
                            key={mahi.taskId}
                            {...mahi}
                            mapVisible={mapVisible}
                          />
                        );
                      }
                    })}
                  </Card.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeIndex: state.activeIndex,
    tasks: state.tasks
  };
};

const mapDispatchToProps = {
  setError,
  changeActiveTask,
  getTasks
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
