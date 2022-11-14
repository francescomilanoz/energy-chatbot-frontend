import React, { useEffect, useState } from "react";
import axios from "axios";
import BuildMessage from "./BuildMessage";

/**
 * This function creates a 'bubble' that is in a loading state until the answer to the user question is fetched from
 * the server. Then, when the answer is fetched, the BuildMessage component is returned to display it and display
 * the new notification button if there are any.
 */
function MessageBubble(params) {
  const [isLoading, setLoading] = useState(true); // until the answer is fetched, the bubble is in a loading state
  const [answer, setAnswer] = useState();

  useEffect(() => {
    let URI;
    if (params.buttonClicked === "notifications") {
      // this means that the user has not typed anything, but clicked on the new notification button
      URI = "http://localhost:8080/api/answers/Read notifications";
    } else {
      // otherwise, the user has typed something and the answer to that question is fetched
      URI = "http://localhost:8080/api/answers/" + params.previousStep.message; // params.previousStep.message is the user question
    }

    // the actual request to the server is made, using the URI just created.
    axios
      .get(URI, {
        crossdomain: true,
      })
      .then((response) => {
        setAnswer(response.data);
        setLoading(false); // this means that the answer is ready, and that the BuildMessage component can be returned
      })
      .catch(() => {
        setAnswer(
          "Ops, something went wrong! Please, check your message, or try again later." // server error
        );
        setLoading(false);
      });
  }, [params.buttonClicked, params.previousStep.message]);

  if (isLoading) {
    // by default, the bubble displays a loading message ('...') for one second. After that, another
    // loading message is displayed ('Still thinking...') until the answer is fetched.
    return <div>Still thinking...</div>;
  }

  return (
    // when isLoading is false (i.e.: the API request returned the answer), the BuildMessage component
    // is returned, with the answer to the user question as a prop. triggerNextStep is the function that allows
    // to move to the next step in the steps array.
    <BuildMessage message={answer} triggerNextStep={params.triggerNextStep} />
  );
}

export default MessageBubble;
