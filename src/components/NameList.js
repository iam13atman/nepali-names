import React, { Component } from 'react';
import { AutoSizer, List } from 'react-virtualized';

import maleIcon from '../assets/male.png';
import femaleIcon from '../assets/female.png';

/**
 * NameList Component.
 */
class NameList extends Component {
  rowRenderer = ({ key, index, style }) => {
    let { names } = this.props;

    return (
      <div key={key} style={style}>
        <li className="collection-item avatar">
          <img
            src={names[index].gender === 'male' ? maleIcon : femaleIcon}
            alt="avatar"
            className="circle"
          />
          <span className="title">
            {names[index].name}
          </span>
          <p className="secondary-title">
            {names[index].gender.charAt(0).toUpperCase() +
              names[index].gender.slice(1)}
          </p>
        </li>
      </div>
    );
  };

  noRowsRenderer = () => {
    return (
      <li className="collection-item center">
        {this.props.isLoading
          ? <div>
              <i className="fa fa-refresh fa-fw" /> Loading...
            </div>
          : <div>
              <i
                className="fa fa-exclamation-circle fa-fw"
                title="Warning"
                aria-hidden="true"
              />{' '}
              Nothing to show.
            </div>}
      </li>
    );
  };

  render() {
    return (
      <ul className="collection">
        <AutoSizer disableHeight>
          {({ width }) =>
            <List
              width={width}
              height={480}
              rowCount={this.props.names.length}
              rowHeight={70}
              noRowsRenderer={this.noRowsRenderer}
              rowRenderer={this.rowRenderer}
            />}
        </AutoSizer>
      </ul>
    );
  }
}

export default NameList;
