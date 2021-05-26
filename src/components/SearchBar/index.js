import * as S from "./styled";
import { useState } from "react";
import SearchIcon from "../../assets/SearchIcon.png";
import CloseIcon from "../../assets/CloseIcon.png";

const SearchBar = ({ value, setValue }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <S.Wrapper expanded={expanded}>
      <S.Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        expanded={expanded}
      />
      <S.Icon
        expanded={expanded}
        src={expanded ? CloseIcon : SearchIcon}
        onClick={() => {
          expanded ? setExpanded(false) : setExpanded(true);
          setValue("")
        }}
      />
    </S.Wrapper>
  );
};

export default SearchBar;
