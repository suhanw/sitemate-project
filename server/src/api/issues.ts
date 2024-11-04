import { Router } from "express";
import {
  GetIssuesResponseData,
  PostIssueResponseData,
  PutIssueResponseData,
  DeleteIssueResponseData,
} from "../../../isomorphic/src/api-contracts/issues";

const ISSUES: GetIssuesResponseData = [
  {
    id: 1,
    title: "first",
    description: "this is first issue",
  },
  {
    id: 2,
    title: "second",
    description: "this is second issue",
  },
  {
    id: 3,
    title: "third",
    description: "this is third issue",
  },
];

export default function () {
  const router = Router();

  router.get("/issues", (req, res) => {
    res.send({ data: ISSUES });
  });

  router.post("/issues", (req, res) => {
    const postIssueResponseData: PostIssueResponseData = {
      id: "newId",
      ...req.body,
    };
    console.log("creating new issue", postIssueResponseData);
    res.send({ data: postIssueResponseData });
  });

  router.delete("/issues/:id", (req, res) => {
    const deleteIssueResponseData: DeleteIssueResponseData = {
      id: req.params.id,
    };
    console.log("deleting issue", deleteIssueResponseData);
    res.send({ data: deleteIssueResponseData });
  });

  router.put("/issues/:id", (req, res) => {
    const putIssueResponseData: PutIssueResponseData = {
      id: req.params.id,
      ...req.body,
    };
    console.log("updating issue", putIssueResponseData);
    res.send({ data: putIssueResponseData });
  });

  return router;
}
