import axios from "axios";

/**
 * This function makes an API call to the backend to create a new notification.
 */
async function createNotification(type, appliance, priority, message) {
  let notificationMessage;
  if (!message) {
    notificationMessage =
      "Notification for " +
      appliance +
      " that executes action " +
      type +
      ". Do you want to execute that action? ";
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
