/**
 * ************************************
*
* @module  Friends
* @author
* @date
* @description presentation component that renders a single box for each friend
*
* ************************************
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LabeledText from './LabeledText.jsx';
import '../stylesheets/styles.css';

const Friend = (props) => {
  // there has been a chance for next contact
// { name, lastContact, frequency, nextContact: lastContact + frequency }
  const { name, lastContact, frequency, nextContact } = props;
  return (
    <div className="friendCard">
      <LabeledText label="Name" text={name} />
      <LabeledText label="Last Contacted" text={lastContact} />
      <LabeledText label="Frequency" text={frequency} />
      <LabeledText label="Next Contact" text={nextContact} />
      <div className="flex">
        <button className="reconnect" onClick={reconnect} />
      </div>
    </div>
  );
};

export default Friend;
