import React, { PureComponent } from "react";
import '../styles/Banner.css';

const ScrollTextDiv = "✸";
const ScrollTextBase = "happy anniversary";

const num = 18;

export default class ScrollText extends PureComponent {
  render() {
    var content = [];
    for (var i = 0; i < num; i++) {
      content.push(
        <p key={2 * i} className="scroll-text">
          {ScrollTextBase} 
        </p>
      );
      content.push(
        <p key={2 * i + 1} className="scroll-text-div">
          {ScrollTextDiv}
        </p>
      );
      
    }
    return <div className="scroll-text-row">{content}</div>;
    
  }
}