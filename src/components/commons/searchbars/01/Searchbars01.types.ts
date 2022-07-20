import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchbars01Props {
  refetch: (
    variables: Partial<IQueryFetchUseditemsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchbars01UIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
