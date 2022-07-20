import { MouseEvent } from "react";
import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  count?: number;

  onClickMoveBoardWrite: () => void;
  onClickMoveBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}
