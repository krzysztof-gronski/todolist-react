import React from "react";
import Container from "./styled";
import Input from "../../Input";
import searchQueryParamName from "../searchQueryParamName";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Container>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Container>
  );
};

export default Search;
