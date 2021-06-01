import * as S from "./styled";
import { useState, useRef } from "react";
import SearchIcon from "../../assets/SearchIcon.png";
import CloseIcon from "../../assets/CloseIcon.png";
import DarkSearchIcon from "../../assets/DarkSearchIcon.png";

/**
 * Search bar used for querying a given value. Recieves searched state from father.
 * Component used on Gallery page.
 */

const SearchBar = ({ value, setValue }) => {
  const inputRef = useRef();
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    console.log(inputRef)
    if (expanded) {
      setExpanded(false);
    }
    if (!expanded) {
      setExpanded(true);
      inputRef.current.focus();
    }
    setValue("");
  };

  return (
    <S.Wrapper expanded={expanded}>
      <S.Icon
        style={expanded ? { marginLeft: "18px", marginRight: 0 } : { display: "none" }}
        src={DarkSearchIcon}
      />
      <S.Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        expanded={expanded}
        ref={inputRef}
      />
      <S.Icon
        expanded={expanded}
        src={expanded ? CloseIcon : SearchIcon}
        onClick={handleExpand}
      />
    </S.Wrapper>
  );
};

export default SearchBar;
