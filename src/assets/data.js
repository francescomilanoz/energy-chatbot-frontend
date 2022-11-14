/**
 * This class contains the data shared between the components.
 */

// The id of the last message sent by the chatbot. Every message will have an incremental ID, starting from 0.
// this variable is used to know the last ID generated. It's needed, for example, to know where to show the new notifications alert
export let lastMessageId = 0;

export function setLastMessageId(value) {
  lastMessageId = value;
}

// TODO REFACTOR THIS CLASS
