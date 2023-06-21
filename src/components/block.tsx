import React, { Component } from "react";
import "../index.css";

interface BlockProps {
  value?: string | null;
  onClick: () => void;
}

export default class Block extends React.Component<BlockProps> {
  render() {
    const { value, onClick } = this.props;
    return (
      <div onClick={onClick} className="block">
        {value}
      </div>
    );
  }
}
