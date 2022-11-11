import React, { useEffect, useState } from "react";
import axios from "axios";
import NotificationMessage from "./NotificationMessage";

function Post(params) {
  const [isLoading, setLoading] = useState(true);
  const [answer, setAnswer] = useState();

  useEffect(() => {
    const URI =
      "http://localhost:8080/api/answers/" + params.previousStep.message;
    axios
      .get(URI, {
        crossdomain: true,
      })
      .then((response) => {
        setAnswer(response.data);
        setLoading(false);
      })
      .catch(() => {
        setAnswer(
          "Ops, something went wrong! Please, check your message, or try again later."
        );
        setLoading(false);
      });
  }, [params.previousStep.message]);

  if (isLoading) {
    return <div>Still thinking...</div>;
  }

  return (
    <>
      <div>{answer}</div>
      <NotificationMessage triggerNextStep={params.triggerNextStep} />
    </>
  );
}

export default Post;
