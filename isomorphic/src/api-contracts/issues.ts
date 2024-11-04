export type Issue = {
  id: string | number;
  title: string;
  description: string;
};

export type GetIssuesResponseData = Issue[];

export type PostIssueResponseData = Issue;

export type PutIssueResponseData = Issue;

export type DeleteIssueResponseData = {
  id: string | number;
};
