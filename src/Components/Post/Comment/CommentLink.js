import styled from "styled-components";

export const CommentLink = styled.a`
  outline: none;
  border: 0px solid;
  font-size: 0px;
  font-family: "Shadows Into Light", serif;
  border-radius: 0px;
  padding: 0px 0px 0 0px;
  cursor: pointer;
  position: relative;
  background-color: ${ props => props.theme.body };
  color: ${ props => props.theme.text };
  text-decoration: none;
  margin: auto;

  :hover {
    background-color: ${ props => props.theme.mode === 'light' ? '#373737' : '#6B8096' };
    color: white;
  }
`;
