import axios from "axios";
import { DeleteIssueResponseData } from "../../../isomorphic/src/api-contracts/issues";

export const API_ROUTE = "/api/issues";

export async function deleteIssue(id: string | number): Promise<DeleteIssueResponseData> {
  try {
    const response = await axios.delete(`${API_ROUTE}/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}