import React from "react";

export const Header = ({ userName }) => {
  return (
    <header id="journal__header__container">
      <h1 id="journal__header__title">JOURNAL OF <em>{userName.toUpperCase()}</em></h1>
    </header>
  );
};
