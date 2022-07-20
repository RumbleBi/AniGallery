import _ from "lodash";
import { ChangeEvent } from "react";
import Searchbars01UI from "./Searchbars01.presenter";

export default function Searchbars01(props) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
    props.onChangeKeyword(data);
  }, 400);
  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }
  return (
    <Searchbars01UI onChangeSearchbar={onChangeSearchbar}></Searchbars01UI>
  );
}
