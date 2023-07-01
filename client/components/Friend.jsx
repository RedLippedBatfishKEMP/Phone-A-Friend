import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
import LabeledText from './LabeledText.jsx';
import '../stylesheets/styles.css';

const Friend = (props) => {
  const { name, lastContact, frequency, nextContact } = props;
  return (
    <div className="catCard">
      <LabeledText label="Name" text={name} />
      {/* <LabeledText label="" text={} /> */}
      {/* <LabeledText label="" text={} /> */}
      {/* <LabeledText label="" text={} /> */}
      <div className="flex">
        <button className="reconnect" onClick={reconnect} />
      </div>
    </div>
  );
};

export default Friend;
