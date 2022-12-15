import MessageBubble from "./MessageBubble";
import BuildMessage from "./BuildMessage";
import { currentLanguage } from "../../assets/data";

/**
 * steps object is used by the ChatBot component to define the conversation flow, and when to activate the user input.
 * The basic flow is: initial > userQuestion > botAnswer > userQuestion > etc..
 * The fetchNotifications step is triggered when the user clicks on the "new notifications" button.
 */

const startingMessage = {
  en: "Hello! I'm here to help! Ask me something.",
  it: "Ciao! Sono qui per aiutarti! Chiedimi qualcosa.",
};

const fetchingNotificationsMessage = {
  en: "Okay! I'm fetching your notifications!",
  it: "Okay! Sto caricando le tue notifiche!",
};

const testingInitialMessage = {
  en: "In the last period, your air conditioner consumed 50 kWh. It's a lot! Do something about it!",
  it: "Nell'ultimo periodo, il tuo climatizzatore ha consumato 50 kWh. E' troppo, fai qualcosa a riguardo!",
};

// production steps flow: use this steps to use the chatbot normally, in production
/*const steps = [
  {
    id: "initial", // the conversation starts here, with a greeting from the chatbot.
    // we use directly BuildMessage and not MessageBubble since it's the first step and there is no loading state or no API request.
    component: <BuildMessage message={startingMessage[currentLanguage]} />,
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
    message: fetchingNotificationsMessage[currentLanguage], // this step is used just to generate this notification bubble
    trigger: "fetchNotifications2",
  },
  {
    id: "fetchNotifications2", // triggered by fetchNotifications, will fetch the notifications from the API
    component: <MessageBubble buttonClicked={"notifications"} />, // the buttonClicked parameter is used to trigger the correct API call, without waiting from a user input
    asMessage: true,
    trigger: "userQuestion",
  },
];*/

// experimentation phase steps flow (for testing purposes: it assumes there is a notification already open). If you are using the chatbot in production mode, please use the steps above
const steps = [
  {
    id: "initial", // the conversation starts here, with the bot reading a notification
    component: (
      <BuildMessage message={testingInitialMessage[currentLanguage]} />
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
    message: fetchingNotificationsMessage[currentLanguage], // this step is used just to generate this notification bubble
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
