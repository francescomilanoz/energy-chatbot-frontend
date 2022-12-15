import React from "react";

function ScenarioDescription() {
  return (
    <>
      <h2>{"Scenario dell'esperimento"}</h2>
      <p>
        {
          "Sono le 13.00 di una domenica dei primi di agosto, è una giornata molto afosa (33°C), sei casa con il"
        }
        <b>{" climatizzatore acceso al massimo della potenza"}</b>
        {", per cercare di raffreddare la casa."}
      </p>
      <p>
        {"Hai finito di pranzare, sparecchi la tavola, "}
        <b>{"carichi la lavastoviglie"}</b>
        {" e, dato che i piatti e le padelle hanno dello sporco incrostato,"}
        <b>{" selezioni il programma intensivo"}</b>
        {" (70°, durata: 3h)."}
      </p>
      <p>
        {"Poi ti sdrai sul divano per rilassarti e "}
        <b>{"accendi il televisore"}</b>
        {
          ". Improvvisamente ti ricordi che devi lavare la biancheria e quindi decidi di "
        }
        <b>
          {
            "fare una lavatrice; per assicurarti una maggiore igiene, selezioni il programma “Cotone” "
          }
        </b>
        {" (90°, durata: 3h)."}
      </p>
      <i>
        <p>
          {
            "Dopo aver attivato questi elettrodomestici, hai ricevuto una  notifica dal tuo Ecobot."
          }
        </p>
      </i>
      <h2>{"Task"}</h2>
      <p>
        {
          "Hai appena ricevuto una notifica dal tuo Ecobot. Ti chiediamo di  leggerla e provare a parlare con il chatbot per scoprire di più  rispetto ai consumi della tua casa e dei suoi elettrodomestici.  Sentiti libero di chattare come meglio preferisci."
        }
      </p>
      <br />
    </>
  );
}

export default ScenarioDescription;
