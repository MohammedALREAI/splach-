import styled from 'styled-components';
interface Iprops {
  bR?: string;
  width?:string;
}

export const Wrapper = styled.div<Iprops>`
  width:${props => props.width}
`;

export const StyledAutoComplete = styled.input<Iprops>`
  background-color: #e1e1e1;
  border: 1px solid #999;
  border-radius: ${props => props.bR}; 
  font-size: 1rem;
  outline: none;
  padding: 10px;
  transition: all 0.4s;
  width: 100%;

  &:focus {
    background-color: #fff;
  }
`;

interface IChoicesWrapperProps {
  openChoices: boolean;
}

export const ChoicesWrapper = styled.div<IChoicesWrapperProps>`
  border: 1px solid #999;
  display: ${(props) => (props.openChoices ? 'flex' : 'none')};
  flex-direction: column;
  margin: auto;
  max-height: 400px;
  overflow-y: scroll;
  width: calc(100% - 5px);
  & button {
    background: none;
    border: none;
    margin-bottom: 1px;
    padding: 10px;
    transition: all 0.1s;
    &:hover {
      background-color: #ccc;
    }
  }
`;
