import Post from "./Post";

const steps = [
  {
    id: "1",
    trigger: "2",
    message: "initial",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    component: <Post />,
    asMessage: true,
    trigger: "2",
  },
];

export default steps;
