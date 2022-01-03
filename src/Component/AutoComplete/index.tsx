import { memo, useRef, useState } from 'react';
import {
  ChoicesWrapper,
  StyledAutoComplete,
  Wrapper,
} from './styled.style';
import { useHistory } from 'react-router-dom';
interface IProps {
  data: string[];
  value?: string;
  onChange?: Function;
  name: string;
  placeholder?: string;
  bR?:string;
  width?:string
}

 function AutoComplete({ data, onChange, value, placeholder, name, bR, width }: IProps) {
  const [state, setstate] = useState<string>('');
  const [openChoices, setOpenChoices] = useState<boolean>(false);
  const [Choices, setChoices] = useState<string[]>([...data]);
 const navigate = useHistory();
  const ref = useRef<HTMLDivElement>(null);

  const handleClickChoice = (item: string) => {
    setstate(item);
    setOpenChoices(false);
  };

  const handleSearchItem = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
     console.log('Enter', e.key);
      navigate.push(`/photos/${state}`);
    }
  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setstate(e.target.value);
    setChoices(data.filter((item) => item.includes(e.target.value)));
    setstate(e.target.value);
  };

  const handleFocusInput = () => {
    setOpenChoices(true);
  };

  const checkIfClickedOutside = (e: MouseEvent) => {
    if (
      ref.current !== null &&
      e.target !== null &&
      ref.current.contains(e.target as any)
    // eslint-disable-next-line no-empty
    ) {
    } else {
      setOpenChoices(false);
    }
  };

  document.addEventListener('mousedown', checkIfClickedOutside);

  return (
    <Wrapper width={width} ref={ref}>
      <StyledAutoComplete
        onChange={handleChangeInput}
        value={state}
        placeholder={placeholder}
        onFocus={handleFocusInput}
        name={name}
        bR={bR}
        onKeyUp={(e) => handleSearchItem(e)}


      />
      {Choices.length > 0 && (
        <ChoicesWrapper openChoices={openChoices}>
          {Choices.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                handleClickChoice(item);
              }}
            >
              {item}
            </button>
          ))}
        </ChoicesWrapper>
      )}
    </Wrapper>
  );
}
export default memo(AutoComplete);
