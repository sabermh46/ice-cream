import React, { Component } from 'react'
import classes from '../../components/IceCream/IceCream';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/IceCream/IceCream';

export class IceCreamBuilder extends Component {
    state = {};
  render() {
    return (
      <div className={['container', classes.container].join()}>
          <IceCream />
          <Builder />
      </div>
    )
  }
}

export default IceCreamBuilder;