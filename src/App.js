import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import { colors, spacing, fontSizing } from "./theme";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  font-size: ${fontSizing.large};
  color: ${colors.contrastTextColor};
  text-align: center;
  margin-bottom: ${spacing.large};
`;

const CalculatorContainer = styled.div`
  background-color: ${colors.calculatorBackgroundColor};
  width: 42rem;
  box-shadow: ${colors.boxShadow};
  border-radius: 8px;
  
`;

const Row = styled.div`
  display: flex;
  height: 10rem;
  overflow: hidden:
  flex: 1;
`;

const RowLabel = styled.div`
  min-width: 12rem;
  font-size: ${fontSizing.large};
  background-color: ${colors.labelBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;


class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header>Simple Bitcoin Calculator</Header>
        <CalculatorContainer>
          <Row>
            <RowLabel>BTC</RowLabel>
          </Row>
          <Row>
            <RowLabel>USD</RowLabel>
          </Row>
        </CalculatorContainer>
      </AppContainer>
    );
  }
}

export default App;
