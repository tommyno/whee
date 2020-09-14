import { NextSeo } from "next-seo";
import Button from "components/Button";

import sanity from "settings/client";

import { Section, Grid, Flow } from "components/Layout";
import Footer from "components/Footer";
import Hero from "components/Hero";
import Header from "components/Header";
import Card from "components/Card";
import CardGrid from "components/CardGrid";

const People = () => {
  return (
    <>
      <NextSeo title="Whee!" description="Sykler og sånt" />

      <Header />

      <Hero />

      <Section inner="medium" color="peach" limitedWidth>
        <p className="h2">
          Elektrisk lastesykkel med plass til last og passasjerer med
          kundestøtte, forsikring og service inkludert.{" "}
          <span className="color--red">1400kr/mnd</span>
        </p>
      </Section>

      <Section>
        <CardGrid reverse>
          <Card
            image="/images/example-illustration.png"
            title="Tittel"
            description="Beskrivelse"
          />
          <Card
            image="/images/example-illustration.png"
            title="Tittel"
            description="Beskrivelse"
          />
          <Card
            image="/images/example-illustration.png"
            title="Tittel"
            description="Beskrivelse"
          />
        </CardGrid>
      </Section>

      <Section color="peach" inner="medium" center>
        <h3>
          <a href="#">Se vårt utvalg av ekstrautstyr</a>
        </h3>
      </Section>

      <Section>
        <Grid>
          <Flow>
            <h2 className="color--red">Fortroppen</h2>
            <p>
              Vår forlansering inkluderer 30 sykler av tysk kvalitet og dette er
              din sjanse til å bli en av de første.
            </p>
            <p>
              Da får du Whee!, en topp nyttesykkel, til en fast månedspris med
              service og forsikring inkludert. Og sammen med dere 100 første,
              skal vi videreutvikle Whee! til å løse deres hverdagsproblemer på
              en bærekraftig måte.
            </p>
            <Button link="/fortroppen">Bli en av fortroppen</Button>
          </Flow>
        </Grid>
      </Section>

      <Footer />
    </>
  );
};

export default People;
