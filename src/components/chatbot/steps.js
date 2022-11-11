import Post from "./Post";
import BuildMessage from "./BuildMessage";

const steps = [
  {
    id: "initial",
    component: (
      <BuildMessage message={"Hello! I'm here to help! Ask me something."} />
    ),
    asMessage: true,
    trigger: "userQuestion",
  },
  {
    id: "userQuestion",
    user: true,
    trigger: "botAnswer",
  },
  {
    id: "botAnswer",
    component: <Post />,
    asMessage: true,
    trigger: "userQuestion",
  },
  {
    id: "fetchNotifications",
    message: "Okay! I'm fetching your notifications!",
    asMessage: true,
    trigger: "fetchNotifications2",
  },
  {
    id: "fetchNotifications2",
    component: <Post buttonClicked={"notifications"} />,
    asMessage: true,
    trigger: "userQuestion",
  },
];

export default steps;
