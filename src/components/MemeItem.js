import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeme } from '../actions/action'

class MemeItem extends Component {
    constructor() {
        super();

        this.state = {
            hovered: false
        }
    }

    postMeme() {
      const { text0, text1 } = this.props;
      const nameObj = {
        template_id: this.props.meme.id,
        text0,
        text1,
      };

      this.props.createMeme(nameObj);
    }

    render() {

        
        
        const meme = this.props.meme;
        return (
          <div
            className="meme-item"
            onMouseEnter={() => this.setState({ hovered: true })}
            onMouseLeave={() => this.setState({ hovered: false })}
            onClick={() => this.postMeme()}
          >
            <img 
            src={meme.url} 
            alt={meme.name} 
            className={ this.state.hovered ? "meme-img darken-img" : "meme-img"}
            />
            <p className={this.state.hovered ? "meme-txt" : "no-txt"}>
              {meme.name}
            </p>
          </div>
        );
    }
}

export default connect(null, {createMeme}) (MemeItem);