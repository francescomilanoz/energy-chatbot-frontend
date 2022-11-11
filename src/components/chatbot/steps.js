import Post from "./Post";
import NotificationMessage from "./NotificationMessage";

const steps = [
  {
    id: "initial",
    component: (
      <NotificationMessage
        message={"Hello! I'm here to help! Ask me something."}
      />
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
];

export default steps;
