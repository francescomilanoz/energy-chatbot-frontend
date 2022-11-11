import React, { useEffect, useState } from "react";
import axios from "axios";
import BuildMessage from "./BuildMessage";

function Post(params) {
  const [isLoading, setLoading] = useState(true);
  const [answer, setAnswer] = useState();

  useEffect(() => {
    let URI;
    if (params.buttonClicked === "notifications") {
      URI = "http://localhost:8080/api/answers/Read notifications";
    } else {
      URI = "http://localhost:8080/api/answers/" + params.previousStep.message;
    }

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
    <BuildMessage message={answer} triggerNextStep={params.triggerNextStep} />
  );
}

export default Post;
