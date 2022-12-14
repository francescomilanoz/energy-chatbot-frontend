import axios from "axios";
import { currentLanguage } from "../assets/data";

/**
 * This function makes an API call to the backend to create a new notification.
 */

const defaultNotificationMessageText = {
  en: {
    part1: "Notification for ",
    part2: " that executes action ",
    part3: ". Do you want to execute this action? ",
  },
  it: {
    part1: "Notifica per ",
    part2: " che esegue l'azione ",
    part3: ". Vuoi eseguire questa azione? ",
  },
};

async function createNotification(type, appliance, priority, message) {
  let notificationMessage;
  if (!message) {
    notificationMessage =
      defaultNotificationMessageText[currentLanguage].part1 +
      appliance +
      defaultNotificationMessageText[currentLanguage].part2 +
      type +
      defaultNotificationMessageText[currentLanguage].part3;
  } else {
    notificationMessage = message;
  }
  await axios
    .post("http://localhost:8080/api/notifications/", {
      type: type,
      appliance: appliance,
      priority: priority,
      message: notificationMessage,
    })
    .catch((error) => {
      console.log(error);
    });
}

export default createNotification;
