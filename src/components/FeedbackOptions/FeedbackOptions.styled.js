import styled from 'styled-components';

export const FeedbackOptionsStyle = styled.ul`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  gap: 15px;
  list-style: none;
`;

export const FeedbackOptionsItem = styled.li`
  /* padding-bottom: 10px; */
`;

export const FeedbackOptionsButton = styled.button`
  display: inline-block;
  width: 90px;
  height: 40px;
  margin: 0 auto 0;
  color: blue;
  background-color: yellow;
  border: 2px solid #1969b4;
  border-radius: 10px;
  cursor: pointer;

  transition: transform 250vs linear;

  &:focus {
    transform: scale(1, 1);
    background-color: #94bbe9;
  }
`;
