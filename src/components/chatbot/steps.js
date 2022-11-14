import MessageBubble from "./MessageBubble";
import BuildMessage from "./BuildMessage";

/**
 * steps object is used by the ChatBot component to define the conversation flow, and when to activate the user input.
 * The basic flow is: initial > userQuestion > botAnswer > userQuestion > etc..
 * The fetchNotifications step is triggered when the user clicks on the "new notifications" button.
 */
const steps = [
  {
    id: "initial", // the conversation starts here, with a greeting from the chatbot.
    // we use directly BuildMessage and not MessageBubble since it's the first step and there is no loading state or no API request.
    component: (
      <BuildMessage message={"Hello! I'm here to help! Ask me something."} />
    ),
    asMessage: true,
    trigger: "userQuestion",
  },
  {
    id: "userQuestion", // the chatbot waits for a message from the user
    user: true,
    trigger: "botAnswer",
  },
  {
    id: "botAnswer", // the chatbot answers the user
    component: <MessageBubble />, // this component is used to generate the bubble with the answer. It fetches the answer from the API.
    asMessage: true,
    trigger: "userQuestion",
  },
  {
    id: "fetchNotifications", // triggered when the user clicks on the "new notifications" button
    message: "Okay! I'm fetching your notifications!", // this step is used just to generate this notification bubble
    trigger: "fetchNotifications2",
  },
  {
    id: "fetchNotifications2", // triggered by fetchNotifications, will fetch the notifications from the API
    component: <MessageBubble buttonClicked={"notifications"} />, // the buttonClicked parameter is used to trigger the correct API call, without waiting from a user input
    asMessage: true,
    trigger: "userQuestion",
  },
];

export default steps;
