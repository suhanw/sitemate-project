import { Router } from "express";

const ISSUES = [
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
    res.send(ISSUES);
  });

  router.post("/issues", (req, res) => {
    console.log("creating new issue", req.body); 
    res.send(req.body); 
  });

  router.delete("/issues/:id", (req, res) => {
    res.send(req.params.id);
  });

  router.put("/issues/:id", (req, res) => {
    const updatedIssue = {
      id: req.params.id,
      ...req.body,
    }
    console.log("updating existing issue", updatedIssue)
    res.send(updatedIssue);
  });

  return router;
}
