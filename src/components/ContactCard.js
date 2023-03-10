import React from "react";

const ContactCard = (props) => {
    const {id, name, email} = props.contact
  return (
    <div
      className="item"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i style={{ color: "red" }} className="trash alternate outline icon"></i>
    </div>
  );
};

export default ContactCard;
