import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Content from "../components/Layout/Content";

const CookiesPage = () => {
  return (
    <Layout>
      <Seo title="Cookie Policy" />

      <Content style={{ maxWidth: 1500, margin: "0 auto" }}>
        <h1>Policy för användning av cookies</h1>
        <p>
          För att optimera din upplevelse på denna webbplats använder All The
          Way cookies. Om du inte accepterar vår användning av cookies så kan du
          inte använda denna tjänst.
        </p>

        <h2>Vad är cookies?</h2>
        <p>
          Cookies är små textfiler med information som lagras på din dator när
          du besöker en webbplats. En cookie lagrar information för att göra din
          upplevelse mer effektiv samt för att ge viss information till ägaren
          av webbplatsen.
        </p>

        <h2>Vad använder All The Way cookies till?</h2>
        <p>
          All The Way använder cookies för att spara användarinställningar samt
          för att lagra anonymiserad användarstatistik och marknadsföring.
        </p>

        <h2>Hur du blockerar och/eller tar bort cookies</h2>
        <p>
          De flesta webbläsare har en standardinställning som accepterar
          användningen av cookies. Dessa inställningar kan du ändra så att du
          kan varnas för eller blockera cookies. Du kan också välja att radera
          alla de cookies som finns lagrade på datorn.
        </p>

        <p>
          Hur du tar bort lagrade cookies eller ändrar inställningarna för
          cookies anges i instruktionerna till webbläsaren.
        </p>

        <p>
          Observera att om du väljer att inte tillåta lagring av cookies så kan
          du inte använda denna webbplats. Stäng då omedelbart ner webbläsaren
          och rensa dina cookies.
        </p>

        <h2>Ändringar och frågor</h2>
        <p>
          All The Way kan komma att uppdatera denna policy utan förvarning.
          Datumet för den senaste ändringen anges i slutet av policyn.
        </p>

        <p>
          Om du har några frågor gällande denna policy eller vår användning av
          cookies är du välkommen att kontakta oss på{" "}
          <a href="mailto:info@allthewaygym.se">info@allthewaygym.se</a>
        </p>

        <p>Denna policy uppdaterades senast den 22 december, 2020.</p>
      </Content>
    </Layout>
  );
};

export default CookiesPage;
