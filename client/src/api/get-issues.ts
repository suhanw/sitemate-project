import axios from "axios";
import { useEffect, useReducer } from "react";
import { GetIssuesResponseData } from "../../../isomorphic/src/api-contracts/issues";

export const API_ROUTE = "/api/issues";

async function getIssues(): Promise<GetIssuesResponseData> {
  try {
    const response = await axios.get(API_ROUTE);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function getIssuesReducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOADING": {
      return {
        loading: true,
      };
    }
    case "SUCCESS": {
      return {
        loading: false,
        error: null,
        issues: action.issues,
      };
    }
    case "ERROR": {
      return {
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}

export function useGetIssuesReducer(): State {
  const [issuesState, dispatch] = useReducer(getIssuesReducer, {
    loading: true,
  });

  useEffect(() => {
    getIssues()
      .then((data) => {
        dispatch({
          type: "SUCCESS",
          issues: data,
        });
      })
      .catch(() => {
        dispatch({
          type: "ERROR",
          error: "Uh oh. Something went wrong.",
        });
      });
  }, []);

  return issuesState;
}

type State = {
  loading: boolean;
  error?: string | null;
  issues?: GetIssuesResponseData;
};

type Action = {
  type: string;
  error?: string | null;
  issues?: GetIssuesResponseData;
};
