// Cypress test
import React from 'react'
import {mount} from 'cypress-react-unit-test'
import { useToggle } from "./useToggle";

it("is off by default", () => {
  const onMessage = "Is On";
  const offMessage = "Is Off";

  const TestComponent = () => {
    const { on } = useToggle();

    return (
      <div>
        <h2>{on ? onMessage : offMessage}</h2>
      </div>
    );
  };

  mount(<TestComponent />)
  cy.contains(offMessage).should('be.visible')
});

it("toggle changes on state", () => {
  const onMessage = "Is On";
  const offMessage = "Is Off";
  const toggleMessage = "Toggle";

  const TestComponent = () => {
    const { on, toggle } = useToggle();

    return (
      <div>
        <h2>{on ? onMessage : offMessage}</h2>
        <button onClick={toggle}>{toggleMessage}</button>
      </div>
    );
  };

  mount(<TestComponent />)
  cy.contains(toggleMessage).click()
  cy.contains(onMessage).should('be.visible')
});

it("setOn changes on state from off to on", () => {
  const onMessage = "Is On";
  const offMessage = "Is Off";
  const setOnMessage = "Set On";

  const TestComponent = () => {
    const { on, setOn } = useToggle();

    return (
      <div>
        <h2>{on ? onMessage : offMessage}</h2>
        <button onClick={setOn}>{setOnMessage}</button>
      </div>
    );
  };

  mount(<TestComponent />)
  cy.contains(setOnMessage).click()
  cy.contains(onMessage).should('be.visible')
});

it("supports initial on state", () => {
  const onMessage = "Is On";
  const offMessage = "Is Off";

  const TestComponent = () => {
    const { on } = useToggle(true);

    return (
      <div>
        <h2>{on ? onMessage : offMessage}</h2>
      </div>
    );
  };

  mount(<TestComponent />)
  cy.contains(onMessage).should('be.visible')
});

it("setOff changes on state from on to off", () => {
  const onMessage = "Is On";
  const offMessage = "Is Off";
  const setOffMessage = "Set Off";

  const TestComponent = () => {
    const { on, setOff } = useToggle(true);

    return (
      <div>
        <h2>{on ? onMessage : offMessage}</h2>
        <button onClick={setOff}>{setOffMessage}</button>
      </div>
    );
  };

  mount(<TestComponent />)
  cy.contains(setOffMessage).click()
  cy.contains(offMessage).should('be.visible')
});
