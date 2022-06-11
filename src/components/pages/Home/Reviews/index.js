import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "./Review";

const Reviews = () => {
  return (
    <div style={{ margin: "170px 0" }}>
      <Slider {...settings}>
        <Review name="Emma" stars={5}>
          <p>
            Mysigt gym där man får mycket hjälp med att komma igång, men också
            med att fortsätta träna efter den första tiden! Fräscht och finns
            mycket maskiner och redskap. Personalen är personlig och engagerad
            utan att vara påstridiga. De kan hjälpa till med hur man ska träna
            utifrån t ex en viss skada. Också bra att det finns samarbete med
            andra gym så man kan träna med sitt medlemskap om man t ex är på
            jobbresa. Tror deras koncept att vara personliga och följa upp varje
            medlem är väldigt positivt för oddsen att man ska hålla igång
            träningen över lång tid. Det känns alltid mysigt att gå till gymmet
            vilket jag ärligt talat ALDRIG tyckt om något annat gym.
            Rekommenderas!
          </p>
        </Review>
        <Review name="Carl Henrik" stars={5}>
          <>
            <p>
              Har helt kommit av mig vad gäller träning under pandemin (där
              skulle jag nog säga att jag är lite unik…sarkasm), och har väl
              alltid haft lite svårt för just gym.
            </p>
            <p>
              Men på All the Way går du inte bara till ett gym - du går hit och
              får stöttning inför träningen, kan hänga kvar och snacka
              efteråt…men framförallt en underbar attityd från alla anställda.
            </p>
            <p>
              Professionell och oerhört god stämning i lokalen. Säger helt
              ärligt att det är första gånger på många år som jag ser fram emot
              mina träningspass - och på något vis också får en kick va att gå
              IN på gymmet också.
            </p>
            <p>
              Avslutningsvis kan jag också nämna att övriga medlemmar är
              fantastiska också, atmosfären som skapas gör att man hjälper
              varandra (åtminstone till större del än jag varit med om på andra
              anläggningar).
            </p>
          </>
        </Review>
        <Review name="Madeleine" stars={5}>
          <p>
            Väldigt kompetent och engagerad personal. Får alltid den hjälpen jag
            behöver på mina träningspass och stämningen på gymmet är verkligen
            något utöver det vanliga. Man blir glad av att gå dit 😍 Stort plus
            att kunna sitta och jobba i loungen eller bara ta en kopp kaffe
            efter träningspasset
          </p>
        </Review>
        <Review name="Adriano" stars={5}>
          <p>
            Nice, clean and spacious gym. Lots of high quality free weight and
            conditioning equipment and friendly staff. Daily pass is quite
            expensive, but worth the experience if you’re serious about your
            training.
          </p>
        </Review>
        <Review name="Rebecca" stars={5}>
          <p>
            Det är ett bra gym att träna på, rent, nya redskap, maskiner. Här är
            alltid tränare som, stöttar och hjälper en. Jag känner mig trygg och
            jag står aldrig i kö för redskap eller någon maskin. Litet härligt
            gym , alla är trevliga och vi är som en familj. Jag trivs och är
            motiverad att komma, även då man har en dålig dag, så mår jag super
            efteråt.
          </p>
        </Review>
        <Review name="Rickard" stars={5}>
          <p>
            Grymma Personliga Tränare med stort och hjärtligt engagemang för min
            fysiska utveckling och välmående i stort. Utrustningen och
            kompetensen som finns i det här butique gymmet kompenserar för att
            lokalerna är mörka och fönsterlösa. Vill man komma igång med sin
            träning men saknar kunskap och en solid plan så hjälper gänget på
            All the Way gym dig hela vägen.
          </p>
        </Review>
        <Review name="Martin" stars={5}>
          <p>
            Vill du ha ett gym som är mer än bara utställda maskiner är detta
            gymmet för dig. Engagerad och utbildad personal, bra utrustning och
            härlig stämning. Roligare har det aldrig varit att träna, går med
            glädje hit frivilligt för att använda deras assault bike...
          </p>
        </Review>
        <Review name="Ioannis" stars={5}>
          <p>
            Gänget på AllTheWay har hjälpt mig uppskatta träning på ett sätt jag
            inte trodde var möjligt. Att investera i en PT och att tänka
            långsiktigt med min träning är något av de bästa besluten jag tagit
            i mitt liv och avkastningen jag fått på denna investering är
            ovärderlig.
          </p>
          <p>
            Det är alltid en fröjd att besöka gymmet - man blir personligt
            bemött och stämningen är fantastisk. Tack för allt ni gjort för mig!
            ❤️
          </p>
        </Review>
        <Review name="Marcus" stars={5}>
          <p>
            Sedan jag började träna på ATW har jag märkt en markant bättre
            skillnad på min kroppsform, aptit, sömn och rutiner.
          </p>
          <p>
            Det är aldrig för mycket folk och fräscha maskiner. Personalen
            bidrar även med att det blir en familjär känsla, detta är inte ditt
            vanliga gym. Detta är gymmet som förändrar ditt liv successivt till
            det bättre.
          </p>
        </Review>
        <Review name="Carl-Magnus" stars={5}>
          <p>
            Har länge letat efter både motivation och ork för att komma igång
            med den vardagliga träningen för att bygga en bättre fysik och
            investera i min framtid. Från det att jag var hos ATW på besök för
            första gången så kändes det bara rätt.
          </p>
          <p>
            Väldigt trevlig och kunnig personal som anpassar träningen utefter
            dina behov. Trodde aldrig att jag skulle säga att träning för en
            gångs skull är roligt, allt tack vare ATW.
          </p>
          <p>
            Går ni i tankarna om att börja träna men saknar motivation, besök
            ATW! De förändrade min syn på träningen!
          </p>
        </Review>
        <Review name="Bandheden" stars={5}>
          <p>
            Tveklöst det bästa gymmet jag har varit på, och då har jag testat en
            hel del! Riktigt trevlig, engagerad och duktig personal som mer än
            gärna delar med sig av sin kunskap. Har haft Oscar som hjälpt mig
            med träningsschema och anpassat detta efter mina behov och tidigare
            skador, vilket har hjälpt mig enormt mycket! 10/10 till alltheway!
          </p>
        </Review>
        <Review name="My" stars={5}>
          <p>
            Börjat här för 2 veckor sedan och är väldigt nöjd med mitt beslut.
            Väldigt professionell stämning både från personal och andra kunder.
            Över mina förväntningar. 😊
          </p>
        </Review>
        <Review name="Nina" stars={5}>
          <p>
            Total gröngöling när det gäller gym men behöve ta tag i mig själv på
            grund av medicinska skäl men har dragit mig för det. Men gav det en
            chans och gick dit för ett samtal och nu är jag totalt "hooked".
            Skitkul rent ut sagt. Underbar stämning. Professionell hjälp med all
            hänsyn till mina begränsningar. Underbar pepping hela tiden. Känner
            glädje över att gå dit. Tänkte kanske jag kan en, möjligtvis två
            gånger i veckan men går nu gladeligen dit tre och kanske blir mer
            när jag blivit lite mer varm i kläderna. Är som sagt nybörjare. Allt
            kärlek till alla på All the Way Gym ❤.
          </p>
        </Review>
        <Review name="Gun" stars={5}>
          <p>
            Vilket fantastiskt och fint gym vi har fått i Malmö! Personliga
            tränaren Zacharias är en fantastisk pt med gedigen kunskap gällande
            träning. Informerar på ett mycket bra och pedagogiskt sätt, så det
            är begripligt. Tack Zacharias för ditt engagemang. /Gun
          </p>
        </Review>
        <Review name="Andreas" stars={5}>
          <p>
            Bästa gymmet i Malmö! Utrustningen på gymmet passar mig perfekt då
            jag tränar främst med fria vikter. Personalen har hög kompetens och
            är väldigt trevliga vilket bidrag till en härlig atmosfär.
          </p>
        </Review>
        <Review name="Gunilla" stars={5}>
          <p>
            Jag uppskattar många saker med All The Way Väl bemannat och Oscar o
            Zackarias finns till hands och hjälper med övningar som är anpassas
            för mig, därutöver finns det tillgång till styrkeyoga en gång i
            veckan med en instruktör som är pedagogisk, kunnig och noggrann. En
            perfekt kombination
          </p>
        </Review>
        <Review name="Sara" stars={5}>
          <p>
            Detta är första gången som jag tycker att det är roligt att träna
            någonting överhuvudtaget. Trots skador och olika begränsningar får
            jag hjälp att ändå hitta sätt att träna hela kroppen på. Otroligt
            att en gymmiljö kan kännas så välkomnande. Jättekul! Så personligt
            och atmosfären är både avslappnad och professionell. Atw har ändrat
            min syn på vad träning är. Tack!
          </p>
        </Review>
        <Review name="Marcus" stars={5}>
          <p>
            All the way i Malmö är ett gym i absolut toppklass. Här kan du träna
            i fina och mysiga lokaler med utrustning i hög kvalité. Gymmet
            genomsyras av härlig, familjär och ytters motiverande stämning
            vilket gör det lika roligt att gå hit varenda gång. Här kommer du
            att få den hjälp, råd och push du behöver av otroligt kunnig,
            passionerad och supertrevlig personal som ALLTID finns där för dig.
            ATW gym i Malmö är ett givet val!
          </p>
        </Review>
        <Review name="Stephanie" stars={5}>
          <p>
            Bra gym för att komma igång med träningen. Får alltid hjälp med
            olika rutiner och träningen varje gång jag tränar.
          </p>
        </Review>
        <Review name="Ingela" stars={5}>
          <p>
            Vilken timing, när jag var redo öppnade detta gym upp. Bästa starten
            för mig var gruppträning för pepp och teknikstöd, efter två månader
            tycker jag nu till och med att det är kul, dessutom har jag börjat
            känna mig starkare. Tack till personalen och ett speciellt tack till
            Oscar som leder styrkegruppen.
          </p>
        </Review>
        <Review name="Sara" stars={5}>
          <p>
            Riktigt fräscht gym med kvalitetsutrustning. Kompetent personal som
            verkligen ger det där lilla extra för att man ska känna sig sedd,
            hjälpt och peppad inför träning. Letar du efter ett gym där du inte
            bara är ett nummer på ett papper utan en person är Alltheway
            stället.
          </p>
        </Review>
        <Review name="Annika" stars={5}>
          <p>
            Väldigt kompetent och engagerad personal. Det här är inte bara ett
            gym, här får du även vetenskapligt förankrade tips kring din
            träning, kostråd samt gigantiskt med pepp! Rekommenderas till 110%
          </p>
        </Review>
        <Review name="Christoffer" stars={5}>
          <p>
            Vilket ställe! Hög kvalitetskänsla på utrustning och lokaler, men
            framförallt gällande personalen. Kan varmt rekommendera All The Way
            för alla som vill ha hjälp med att nå sina mål och samtidigt uppleva
            träningsglädje på riktigt!
          </p>
        </Review>
        <Review name="Anders" stars={5}>
          <p>
            Det här är ett ”time to put in the work” gym och det märks när man
            kommer in! Vill man bränna kalorier och bygga muskler har man kommit
            till rätt ställe. Rekommenderas starkt!
          </p>
        </Review>
        <Review name="Hannah" stars={5}>
          <p>
            Bästa gym🙂, superbra service. De hjälper så man blir säker, visar
            kommer med förslag och gör så man blir trygg med sin träning, man
            kan fråga när man undrar ngt annars så frågar de hur de går . Kan
            starkt rekommendera alla!!!!
          </p>
        </Review>
        <Review name="Sydney" stars={5}>
          <p>
            För största gången någonsin längtar jag efter att gå till gymmet.
            Vanessa är en supertränare. Har jättekul varje gång man går dit.
          </p>
        </Review>
        <Review name="Victor" stars={5}>
          <p>
            Fantastiskt bemötande, gullig personal som bryr sig om sina
            medlemmar. Tryggt, säkert och kvalitet 👍👊
          </p>
        </Review>
        <Review name="Jenny" stars={5}>
          <p>
            Snygga & fräscha lokaler, trevligt gym med härlig stämning &
            professionella PT på plats. Kan varmt rekommendera.
          </p>
        </Review>
        <Review name="Micke" stars={5}>
          <p>
            Bra frächt gym med toppen uppmärksammad och service inriktad
            personal.
          </p>
        </Review>
        <Review name="Niclas" stars={5}>
          <p>
            Hög klass, fräscha lokaler, ett härligt driv & engagemang från
            personalen som jobbar där!
          </p>
        </Review>
        <Review name="Nils" stars={5}>
          <p>
            Den trevliga atmosfären och det personliga bemötandet har hjälpt mig
            över förväntan
          </p>
        </Review>
      </Slider>
    </div>
  );
};

const settings = {
  centerMode: true,
  dots: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 1,
  speed: 500,
  adaptiveHeight: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1010,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px",
      },
    },
  ],
};

export default Reviews;
