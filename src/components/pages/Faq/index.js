import React from "react";
import Content from "../../Layout/Content";
import * as styles from "./faq.module.css";
import FaqItem from "./faqItem";

const Faq = () => {
  return (
    <>
      <Content className={styles.container}>
        <h2>FAQ</h2>
        <p>
          Vi förstår att du har frågor, vi försöker svara på de vanligaste
          frågorna nedan. Vi ber om ursäkt om du inte tycker vissa svar
          tillfredställer dig. Det är svårt att ge ett svart och vitt svar när
          vi jobbar individuellt med alla våra medlemmar. Vill du veta exakt hur
          det kommer se ut för dig kommer det alltid vara bäst att ansöka om en
          personlig hälsoplan så börjar vi med ett telefonsamtal.
        </p>
        <div className={styles.faq}>
          <FaqItem
            question="Vilka är All The Way?"
            answer={
              <p>
                Vi är en träningsanläggning där du kommer och tränar för att
                uppnå dina målsättningar. Oavsett form, längd eller bakgrund är
                alla välkomna hos oss. Vi går hela vägen med alla våra medlemmar
                och du får support från dag 1. Alla börjar med att ansöka om att
                göra en personlig hälsoplan där vi går igenom; din
                träningsbakgrund, vilka erfarenheter du har, hur dina
                förutsättningar ser ut och om du har skador eller smärtsymptom.
                Detta gör vi för att kunna komma fram till en plan för dig att
                börja med så du kommer igång och inte upprepar samma gamla
                misstag.
              </p>
            }
          ></FaqItem>
          <FaqItem
            question="Vem tränar på All The Way?"
            answer={
              <p>
                Vi fokuserar främst på support till våra medlemmar. De som
                tränar hos oss är primärt de som behöver hjälp med sin träning
                eller nå sin målsättning, samt de som vill ha rymligt med plats
                och där redskap alltid ska vara tillgängligt. Passar du in i
                beskrivningen så är vi träningsanläggningen för dig.{" "}
              </p>
            }
          ></FaqItem>
          <FaqItem
            question="Vad kostar det?"
            answer={
              <p>
                Vi förstår att pris är en relevant fråga. Däremot redovisas inga
                priser på hemsidan då vi bygger upp din tjänst efter dina behov
                och förtusättningar under den personliga hälsoplanen. I slutet
                av mötet gå vi igenom din plan som du bör starta med och
                priserna. I slutet av mötet har du möjlighet att tacka ja eller
                nej.{" "}
              </p>
            }
          ></FaqItem>
          <FaqItem
            question="Kan jag använda mitt friskvårdsbidrag?"
            answer={
              <>
                <p>
                  Oavsett vart du tränar kan du alltid använda ditt
                  friskvårdsbidrag. Är vi inte knutna till portalen ni använder
                  via ditt arbete så kan du hämta ut ett kvitto via “mina sidor”
                  och skicka in till företaget som sköter er friskvård.
                  Företaget får inte neka ditt kvitto.
                </p>
                <p>
                  För medlem: <br></br>Gå in på medlemssidan i appen. alt dator.
                  Logga in i högra hörnet på webbläsaren eller i menyn på
                  mobilen i högra hörnet.
                </p>
                <p>Gör så här:</p>
                <ol>
                  <li>Hem → Träningskort</li>
                  <li>Scrolla vänster på ditt medlemskap</li>
                  <li>Tryck på “Hämta samlingskvitto”</li>
                  <li>Välj tidsspann</li>
                  <li>Tryck på “Hämta samlingskvitto”</li>
                </ol>
                <p>
                  Totala beloppet för perioden du väljer visas för dig innan du
                  hämtar kvittot.
                </p>
              </>
            }
          ></FaqItem>
          <FaqItem
            question="Vart ligger All The Way?"
            answer={
              <p>
                Träningsanläggningen finner du på Djäknegatan 33. Dörren som är
                brevid ingången till Citygaraget. Vi har en blå folierad dörr
                med en stor blå skylt över.
              </p>
            }
          ></FaqItem>
          <FaqItem
            question="Hur är era öppettider?"
            answer={
              <>
                <p>
                  Dörren är alltid öppen 05:00 - 23:00 för våra medlemmar. Är du
                  inte medlem så är våra bemannade tider:
                </p>
                <ul>
                  <li>Mån - Tor: 08:00 - 20:00</li>
                  <li>Fre: 08:00 - 18:00</li>
                  <li>Lör: 09:00 - 17:00</li>
                  <li>Sön: Obemannat, endast tillgängligt för medlemmar.</li>
                </ul>
                <p>
                  Observera att bemannade tider kan variera röda dagar, sommar
                  och högtider.
                </p>
              </>
            }
          ></FaqItem>
          <FaqItem
            question="Får jag hjälp när jag tränar? "
            answer={
              <p>
                Alla våra medlemmar får alltid någon form av support. Vissa
                behöver mer och vissa behöver mindre. Vi har alltid en personlig
                tränare eller instruktör tillgänglig under våra bemannade tider
                som finns för dig om du skulle behöva hjälp med tex; Teknik i en
                övning, byta ut en övning i ditt träningsprogram, ställa frågor
                om kost, träning eller smärta och mycket mer.
              </p>
            }
          ></FaqItem>
          <FaqItem
            question="Hur fungerar personlig tränare? "
            answer={
              <>
                <p>
                  Om du väljer personlig träning så kommer en tränare ringa dig
                  efter du har gjort din personliga hälsoplan och boka in tider
                  där ni ska träffas.
                </p>
                <p>
                  En personlig tränare hjälper dig anpassa träningen efter dina
                  erfarenheter och väljer bra övningar för att du ska komma dit
                  du vill. Tillsammans sätter ni båda upp en struktur för hur
                  många gånger i veckan du ska träna och vad du ska göra baserat
                  på dina behov och dina förutsättningar. Du kommer få hjälp med
                  justeringar om och när det behövs samtidigt som din PT är din
                  personliga kontaktperson. Din tränare sköter alla anteckningar
                  så du slipper hålla koll. Alla våra personliga tränare kan
                  även jobba med kost och det ingår i paketet som byggs upp
                  under din personliga hälsoplan. Vi vill hjälpa dig anpassa
                  träningen till vardagslivet, vardagslivet ska inte anpassas
                  till din träning- samt ska det vi göra våra långsiktigt. Detta
                  ska vara en långsiktig investering, inte ett litet kapitel i
                  nuet
                </p>
              </>
            }
          ></FaqItem>
          <FaqItem
            question="Får jag ta med mig mina barn? "
            answer={
              <p>
                Hos oss får föräldrar ta med sig sina barn, oavsett ålder! Du
                ansvarar för att dina barn inte stör andra medlemmar. Varje
                omklädningsrum har utrymme för att ställa barnvagnen då den inte
                får vara på gymgolvet.
              </p>
            }
          ></FaqItem>
          <FaqItem
            question="Vart parkerar jag? "
            answer={
              <>
                <p>
                  Om du kör till oss så kan du parkera i Citygaraget för 18kr/h.
                  Du kör in som vanligt och när du är klar med din träning så
                  betalar du din parkering i vår receptionen innan du går
                  tillbaka till bilen. Du kan även köpa parkeringsbiljetter om
                  du tränar på tider när vi inte är på plats. Har du cykel så
                  parkeras dom vid hansa kompaniet eller på kalendegatan. Cyklar
                  tass inte med in i träningsanläggningen.
                </p>
                <p>Sparkcyklar är tillåtna att ta in i omklädningsrummet.</p>
              </>
            }
          ></FaqItem>
          <FaqItem
            question="Ni försökte nå mig, varför?  "
            answer={
              <>
                <p>
                  Är du medlem så är det antagligen en uppföljning för att kolla
                  hur det är med dig. Är du inte medlem så kontaktar vi dig
                  enbart om du har skickat in ditt intresse till träning eller
                  ansökt om en personlig hälsoplan. Alternativt kan det vara en
                  av dina vänner som har rekommenderat oss att ringa dig då dom
                  tror du hade trivits hos oss på All The Way Gym.
                </p>
                <p>
                  Vi ringer aldrig någon utan att ha blivit ombedda att ringa.
                </p>
              </>
            }
          ></FaqItem>
          <FaqItem
            question="Kan jag provträna hos er?"
            answer={
              <>
                <p>
                  Vi erbjuder dagspass eller veckopass. Fri provträning erbjuds
                  sällan och när vi gör det annonserar vi ut det på våra sociala
                  medier. Lite oftare får våra medlemmar ta med sina vänner utan
                  extra kostnad lite då och då.
                </p>
                <p>
                  <b>Varför är ni restriktiva med provträning?</b>
                </p>
                <p>
                  Vi vill lägga majoriteten av vårt fokus på våra medlemmar
                  eller på dom som har bestämt sig att komma igång. Eftersom vi
                  assisterar alla våra medlemmar på något vis måste vi vara
                  eftertänksamma med vår tid.
                </p>
              </>
            }
          ></FaqItem>
          <FaqItem
            question="Hur sköts betalningar hos er?"
            answer={
              <p>
                Vi lägger upp alla våra tjänster på autogiro. Om du önskar kan
                du betala ett önskat eller hela belopp på ett eller flera
                tillfällen.
              </p>
            }
          ></FaqItem>
          <FaqItem
            question="Har ni uppsägningstid?"
            answer={<p>Alla våra tjänster har 1 månads uppsägningstid.</p>}
          ></FaqItem>
          <FaqItem
            question="Har ni bindningstid?"
            answer={
              <p>
                Vi har varierade upplägg beroende på vad vi kommer överens om
                under din personliga hälsoplan.
              </p>
            }
          ></FaqItem>
          <FaqItem
            question="Uppsägning av medlemskap"
            answer={
              <>
                <p>
                  Vårt mål är att du inte ska behöva säga upp. Hälsa och träning
                  är en kamp med dalar och berg. Har du inte kommit igång som du
                  önskade så kontakta oss innan du väljer att säga upp så ser vi
                  vad vi kan hjälpa dig med.
                </p>
                <p>
                  Annars görs en uppsägning på mail till: info@allthewaygym.se
                </p>
              </>
            }
          ></FaqItem>
        </div>
      </Content>
    </>
  );
};

export default Faq;
