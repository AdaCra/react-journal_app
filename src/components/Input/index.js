import { SubmitButton } from "../Button";

export const Input = () => {
  return (
    <section id="entry__input__container">
      <h2 id="entry__input__heading">New Entry</h2>
      <label className="entry__input__label" htmlFor="entry__input__motto">
        Motto
      </label>
      <input type="text" id="entry__input__motto"></input>
      <label className="entry__input__input" htmlFor="entry__input__notes" >
        Notes
      </label>
      <textarea id="entry__input__notes" className="entry__input__input"></textarea>
      <SubmitButton />
    </section>
  );
};
