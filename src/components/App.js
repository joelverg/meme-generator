import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/index.css'
import MemeItem from './MemeItem';
import { Form, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import MyMemes from './MyMemes';

class App extends Component {
  constructor() {
    super();

    this.state = {
      memeLimit: 10,
      text0: '',
      text1: ''
    }
  }

    render() {
      console.log(this.props.memes)
      const memes = this.props.memes.memes
        return (
          <div>
            <h2>Welcome to the Meme Generator!</h2>
            <MyMemes/>
            <h4>Write Some text</h4>
            <Form>
              <FormGroup>
                <FormLabel>Top</FormLabel>

                <FormControl
                  type="text"
                  onChange={(event) =>
                    this.setState({ text0: event.target.value })
                  }
                ></FormControl>
              </FormGroup>

              <FormGroup>
                <FormLabel>Bottom</FormLabel>

                <FormControl
                  type="text"
                  onChange={(event) =>
                    this.setState({ text1: event.target.value })
                  }
                ></FormControl>
              </FormGroup>
            </Form>

            {memes?.slice(0, this.state.memeLimit).map((meme, index) => {
              return (
                <MemeItem 
                  key={index} 
                  meme={meme} 
                  text0={this.state.text0}
                  text1={this.state.text1}
                  
                  />
              )
              
            })}

            <div
              className="meme-button"
              onClick={() => {
                this.setState({ memeLimit: this.state.memeLimit + 10 });
              }}
            >
              Load 10 more memes...
            </div>
          </div>
        );
        
    }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null) (App);