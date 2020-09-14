import { NextSeo } from "next-seo";

import sanity from "settings/client";

import { Section, Flow } from "components/Layout";
import Header from "components/Header";
import Form from "components/Form";

const FortroppenPage = ({ sanityData }) => {
  console.log("sanityData", sanityData[0]);

  return (
    <>
      <NextSeo title="Whee!" description="Sykler og sånt" />
      <Header />

      <article>
        <Section limitedWidth>
          <h1 className="h2">Whee! søker Oslos nye lastesyklister</h1>
          <p className="h3">
            Drømmer du om en enklere hverdag, men synes de fine lastesyklene er
            for dyre? Nå kan du bli en del av løsningen!
          </p>
        </Section>

        <Section limitedWidth>
          <Flow>
            <p>
              Whee! er den nye tjenesten som gir deg en lastesykkel av beste
              kvalitet for en fast månedlig sum, der forsikring, service, lås,
              dekkskift og teknisk hjelp er inkludert.
            </p>

            <p>
              Whee!-sykkelen er en Kettler Familiano L, en tysk, kompakt og
              lettkjørt longtail med kraftig motor, smarte detaljer og god plass
              til to barn pluss ekstra bagasje.
            </p>

            <p>
              For 1400 kr pr mnd får du en enklere hverdag med transportetapper
              du vil glede deg til, samtidig som du slipper bekymringene som
              følger med kostbare sykkelkjøp.
            </p>

            <p>
              Blir din Whee!-sykkel stjålet, får du ny etter to dager. Er den på
              service, får du en lånesykkel mens din egen blir ferdig. Når
              vinteren kommer, ordner vi både vinterdekk og dekkskift – det er
              inkludert i prisen. Og vi er aldri langt unna med tips, råd og
              svar på alt du lurer på.
            </p>
          </Flow>
        </Section>
        <Section limitedWidth>
          <Form />
        </Section>
      </article>
    </>
  );
};

const query = `*[_id == "447758bb-6427-4906-b22c-ea2c8f0643cf"]{
	title,
  intro,
  content,
  headerMedia
}`;

export const getStaticProps = async () => {
  const sanityData = await sanity.fetch(query);
  return {
    props: { sanityData } // will be passed to the page component as props
  };
};

export default FortroppenPage;
