import React from "react";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Footer from "../components/common/Footer";
import SocialLinks from "../components/common/SocialLinks";
import Menu from "../components/common/Menu";
const CookiesPage = () => (
  <Layout>
    <Helmet title="All The Way Gym: GDPR">
      <meta name="description" content="All The Ways GDPR policy" />
    </Helmet>
    <Menu external />
    <section
      style={{ paddingTop: 150, paddingBottom: 150, background: "white" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1>Vi skyddar dina personuppgifter </h1>
            <p className="mb-5">
              Din personliga integritet och säkerhet för dina personuppgifter är
              viktiga för All The Way Gym. All The Way Gym ansvarar för att dina
              personuppgifter behandlas korrekt och i enlighet med gällande
              lagstiftning. Informationen är tillämplig för dig som kund,
              medlem, företag och arbetssökande.
            </p>

            <h2>Varför behandlar vi personuppgifter? </h2>
            <p className="mb-5">
              Vi behandlar dina personuppgifter för administration kring ditt
              avtal, kundvårdande aktiviteter, erbjudande, statistik men även
              utvärdering och kvalitetssäkerhetsarbete. I vår kundbas behandlar
              vi era uppgifter för att säkerställa en bra och säker relation,
              samt eventuella reklamationer. Har du har varit inne på våran
              hemsida och godkänt behandlingen av personuppgifter i något av
              våra kontaktformulär, så har du gett samtycke till att dina
              personuppgifter även används för att vi ska kunna kommunicera till
              dig. Om du inte vill att dina uppgifter ska användas för
              marknadsföring, vänligen kontakta oss via e-post:{" "}
              <a href="mailto:info@allthewaygym.se">info@allthewaygym.se</a>
            </p>

            <h2>Vilka personuppgifter behandlar vi? </h2>
            <p className="mb-5">
              Personuppgifter räknas som all slags information som direkt eller
              indirekt kan kopplas till dig som privatperson eller er som
              företag. Som medlem och företagskund så behandlar vi dina
              kontaktuppgifter som du själv har lämnat till oss samt information
              om det uppdrag eller de tjänster/produkter som ska utföras eller
              levereras till dig som kund. Vi sammanställer även information
              kring deltagandet i våra pass eller användandet kring
              produkter/servicen som erbjuds till dig som kund eller företag.
              Detta för att ge så bra upplevelse som möjligt av All The Way Gym.
              Behandlingen av personuppgifter sker med stöd av avtal, rättsliga
              förpliktelser och berättigat intresse för att uppnå nämna
              användningsområden ovan. Vi använder även informationen vi samlar
              in för att anpassa vilken kommunikation som passar dig bäst som
              kund.
            </p>

            <h2>Vem kommer att ta del av dina uppgifter </h2>
            <p className="mb-5">
              All The Way Gym kan komma att dela uppgifter som rör medlemmar,
              leverantörer och arbetssökande i syfte att tillhandahålla vår
              service, utveckla vår service och produkt till dig som
              kund/medlem.
            </p>

            <h2>Lagring och gallring av personuppgifter </h2>
            <p className="mb-5">
              All The Way Gym lagras i en databas där vår IT-partner (Zoezi)
              ansvarar för driften. Vi behåller dina uppgifter så länge du är
              medlem, samt i ytterligare upp till 36 månader för ovanstående
              syften. Därefter kommer endast relevanta uppgifter att sparas för
              att fullfölja rättsliga förpliktelser.
            </p>

            <h2>Skydd av dina personuppgifter </h2>
            <p className="mb-5">
              All The Way Gym har vidtagit lämpliga tekniska och organisatoriska
              åtgärder för att skydda vår IT-miljö. För att säkerställa att
              personuppgifter behandlas på ett säkert sätt använder vi oss av
              datanätverk som är intrångsskyddade med bland annat brandväggar
              och lösenordsskydd. All The Way Gym och samarbetspartners för
              innebörden av din integritet och är därför bundna av
              sekretessavtal för att du ska känna dig säker hos oss på All The
              Way. Uppsatta sekretessavtal lägger grunden för vår hantering av
              IT-säkerhet och dokumentation om dig som kund eller företag. All
              vår dokumentation sker i enlighet med bestämmelserna i gällande
              lagstiftning.
            </p>

            <h2>Dina rättigheter </h2>
            <p className="mb-5">
              Datalagstiftningen ger dig ett antal rättigheter till behandlingen
              av dina personuppgifter. Du har rätt att ta del av de
              personuppgifter som finns registrerade om dig. Om de är felaktiga
              eller ofullständiga har du rätt att begära att uppgifterna rättas
              eller raderas.
            </p>

            <h2>Tillgång till registerutdrag </h2>
            <p className="mb-5">
              Du kan begära ett registerutdrag, rättning eller radering av dina
              uppgifter. Vill du göra någon form av begäran så mailar du{" "}
              <a href="mailto:info@allthewaygym.se">info@allthewaygym.se</a>,
              märk ditt mail med: “Registerutdrag”. Märk att om du vill att vi
              raderar essentiell information så avslutas ditt medlemskap och en
              slutfaktura skickas till dig.
            </p>

            <h2>Dataportabilitet</h2>
            <p className="mb-5">
              Du rätt till att få en kopia på de personuppgifter som rör dig i
              ett strukturerat format (dataportabilitet). Rätten till
              dataportabilitet omfattar uppgifter som du själv har
              tillhandahållit oss.
            </p>

            <h2>Begränsning </h2>
            <p className="mb-5">
              Att uppgifterna begränsas betyder att vi gör en markering om att
              hanteringen av personuppgifter ska begränsas till ett visst syfte.
            </p>

            <h2>Återkalla samtycke </h2>
            <p className="mb-5">
              I den utsträckning vi behandlar dina personuppgifter med stöd av
              ditt samtycke har du rätt att, när som helst, återkalla ditt
              samtycke till behandlingen.
            </p>

            <h2>Ändringar i denna information</h2>
            <p className="mb-5">
              Vi på All The Way Gym förbehåller oss rätten att revidera denna
              information från tid till annan. Om vi gör mindre ändringar så
              kommer vi att meddela dig via e-post. Om vi ändrar informationen
              på ett sätt som väsentligt skiljer sig från vad som angavs idag
              kommer vi att underrätta dig om dessa förändringar på annat
              lämpligt sätt.
            </p>

            <h2>Frågor och funderingar </h2>
            <p className="mb-5">
              Om du har några frågor gällande behandling av personuppgifter inom
              All The Way Gym är du välkommen att kontakta oss via e-post{" "}
              <a href="mailto:info@allthewaygym.se">info@allthewaygym.se</a>
            </p>
            <p className="mb-5">
              Denna policy uppdaterades senast den 25 april, 2021.
            </p>
          </div>
        </div>
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default CookiesPage;
