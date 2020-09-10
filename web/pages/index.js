import React from "react";
import { NextSeo } from "next-seo";

import sanity from "settings/client";

import Footer from "components/Footer";
import Section from "components/Section";
import Hero from "components/Hero";
import Header from "components/Header";
import Card from "components/Card";
import CardGrid from "components/CardGrid";

const query = `*[_type == "person"] {
  _id,
  name,
  image,
  "imageAspect": image.asset->.metadata.dimensions.aspectRatio,
}[0...50]
`;

const People = ({ people }) => {
  // console.log("people", people);

  return (
    <>
      <NextSeo title="Whee!" description="Sykler og sånt" />

      <Header />

      <Hero />

      <Section inner="medium" color="peach">
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
        <div className="grid">
          <div className="grid__item flow">
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
            <p>
              <a href="#">Les mer om hvordan du kan bli en av fortroppen</a>
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const people = await sanity.fetch(query);
  return {
    props: { people } // will be passed to the page component as props
  };
};

export default People;
