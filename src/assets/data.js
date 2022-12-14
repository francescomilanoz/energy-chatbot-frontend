/**
 * This class contains the data shared between the components.
 */

// The id of the last message sent by the chatbot. Every message will have an incremental ID, starting from 0.
// this variable is used to know the last ID generated. It's needed, for example, to know where to show the new notifications alert
export let lastMessageId = 0;

export function setLastMessageId(value) {
  lastMessageId = value;
}

export const currentLanguage = "it"; // the current language of the chatbot interface. It can be "it" or "en". Please note that, in order to change the actual language of the chatbot input and ouput, you need to change the language in the backend, setting the "currentLanguage" parameter in the strings.js file
