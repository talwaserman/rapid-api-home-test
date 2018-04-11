require('./style.scss');
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Draggable from 'react-draggable';
import * as actionCreators from './actions';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.handleDrag = this.handleDrag.bind(this);
  }

  componentDidMount() {
    this.props.getDragLocation();
  }

  handleDrag(e, ui) {
    this.props.saveDragLocation({
      x: this.props.deltaPosition.x + ui.deltaX,
      y: this.props.deltaPosition.y + ui.deltaY,
    });
  }

  render() {
    let deltaPosition = this.props.deltaPosition;
    if (this.props.userData) {
      return(
        <div className="landing welcome-message">
          <h1>Welcom to RapidAPI Drag&Drop Game</h1>
          <Draggable
            handle=".handle"
            defaultPosition={{x: deltaPosition.x, y: deltaPosition.y}}
            position={null}
            grid={[25, 25]}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            bounds="body"
            onStop={this.handleStop}>
            <div className="draggable-item">
              <div className="handle">
                Drag me
              </div>
            </div>
          </Draggable>
        </div>
      );
    } else {
      return(
      <div className="landing guest-message">
        <h1>To see the magic, please <Link to={'/login'}>login</Link></h1>
        <img 
          src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/magician-pulling-rabbit-out-of-hat-h-armstrong-robertsclassicstock.jpg" 
          alt="rabit out of a hat"
          width="500px"
        />
      </div>);
    }
  }
}

const mapStateToProps = state => ({
  userData: state.UserStatusReducer.userData,
  deltaPosition: state.ThumbnilReducer.deltaPosition
});
const mapDispatchToProps = dispatch => () => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
