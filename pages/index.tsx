import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import PlausibleProvider from 'next-plausible';

const Home: NextPage = () => {
  return (
    <PlausibleProvider domain="scopethree.org">
      <div className={styles.container}>
        <Head>
          <title>Scope Three</title>
          <meta
            name="description"
            content="The Scope Three manifesto and pledge"
          />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Scope Three</h1>
          <p className={styles.description}>
            We face a challenge in assessing the ecological impact of the things
            we do: some emissions are entirely under our control, while others
            are less so. For most people, the biggest potential environmental
            impact isn&apos;t from what we do directly, it&apos;s from what we
            buy.
          </p>

          <div className={styles.card}>
            <h2>What is Scope Three?</h2>
            <p>
              Scope One emissions are directly caused by things we do ourselves.
              For many of us, driving our cars and heating our homes are
              probably the biggest contributors to our scope one emissions.
            </p>
            <p>
              Scope Two emissions are caused in the process of delivering our
              energy supply. Electrical power, gas distribution, and petrol
              supplies.
            </p>
            <p>
              Scope Three is everything else. Which is a <em>lot</em>: all the
              scope one and two emissions for every company that sells you
              anything, plus all <em>their</em> scope three emissions.
            </p>
            <p>
              Keeping track of our scope three emissions is really hard. A
              motivated consumer may be able to glean some insight into the
              behaviour of the companies they buy from, but supply chains are
              long and complex and for the most part opaque to us.
            </p>
            <p>
              We can take some steps to limit, or even to mitigate, our scope
              three emissions. But the Scope Three Manifesto and Scope Three
              Pledge are intended to shift this effort to the place where it
              belongs: the suppliers who are responsible for these emissions.
            </p>
          </div>
          <div className={styles.card}>
            <h2>The Scope Three Zero Manifesto</h2>
            <p>
              Our scope three emissions are primarily under the control of our
              suppliers.
            </p>
            <p className={styles.indent}>
              We can &mdash; to a degree &mdash; control the amount of our scope
              three emissions by choosing the right suppliers. But this is hard.
            </p>
            <p>
              All our emissions are scope three emissions for our customers.
            </p>
            <p className={styles.indent}>This is a corollary of the above.</p>
            <p>
              A supplier is better-placed to account for emissions than a
              customer.
            </p>
            <p className={styles.indent}>
              Especially when offsetting or netting out is undertaken, it&apos;s
              <em>really hard</em> to work out what one&apos;s impact might be
              without the help of the supplier.
            </p>
            <p>
              All suppliers should tell their customers what the carbon impact
              of their custom is.
            </p>
            <p className={styles.indent}>
              Without this requirement, the externality of environmental impact
              is invisible to the customer. They can make informed guesses, but
              there is no incentive in the customer/supplier relationship for
              the supplier to lessen the environmental impact of their products.
            </p>
            <p>That impact should be zero.</p>
            <p className={styles.indent}>This internalises the externality.</p>
            <p className={styles.indent}>
              The important change from the point of view of the purchaser is
              that the cost is in the headline price: it makes comparing
              suppliers that much easier, and it removes the burden of scope
              three emissions from customers.
            </p>
            <p className={styles.indent}>
              It also lets suppliers directly benefit from their efforts to
              reduce the impact of their business to the environment, as their
              offsetting/netting cost goes down.
            </p>
          </div>
          <div className={styles.card}>
            <h2>The Scope Three Pledge</h2>
            <p>
              As part of our work towards a sustainable future, we pledge to
              work towards a Scope Three Zero future where scope three emissions
              are dealt with by the supply chain directly.
            </p>
            <p>
              We will work towards providing our customers with a carbon-neutral
              product.
            </p>
            <p>
              We will encourage our suppliers to account for the carbon costs of
              their products in their relationship with us.
            </p>
          </div>
          <div className={styles.card}>
            <h2>Questions</h2>
            <p>
              I&apos;m a consumer. Why should I care whether a company is Scope
              Three Zero?
            </p>
            <p className={styles.indent}>
              Scope Three Zero is a level playing field for businesses: it
              requires them to account for the cost of their emissions, and be
              transparent about the total cost of what they sell you, rather
              than hiding the cost of their products by passing the
              responsibility of working out CO₂ emissions and dealing with them
              onto the consumer.
            </p>
            <p className={styles.indent}>
              Scope Three Zero encourages efficiency: when the carbon cost of a
              product is included in a company&apos;s bottom line, a more
              expensive process with a lower environmental impact leads to lower
              prices.
            </p>
            <p>
              I sell to the public, why should I sign the Scope Three Pledge?
            </p>
            <p className={styles.indent}>
              The vast bulk of most consumers&apos; environmental emissions are
              scope three. It&apos;s certainly possible for a motivated consumer
              to offset or remove CO₂ privately, but it&apos;s not common. The
              right thing should be the easy thing to do: by accounting for the
              environmental impact of your products, you are making more
              sustainable products available to more people.
            </p>
            <p className={styles.indent}>
              Consumers who are conscious of the environmental impact of their
              lifestyle are more likely to seek out suppliers who demonstrate
              their willingness to help. Ensuring that all our products have
              their CO₂ accounted for makes it easier to compare products on a
              like-for-like basis.
            </p>
            <p>
              I&apos;m a part of the supply chain, why am I being encouraged to
              sign the Scope Three Pledge, and why should I encourage my
              suppliers to do the same?
            </p>
            <p className={styles.indent}>
              The incentives to account for scope three emissions in a B2B
              relationship naturally spread down the supply chain as companies
              adopt this approach. A company that is trying to account for the
              emissions they pass to their customers will find that accounting
              much easier when their suppliers do likewise.
            </p>
          </div>
        </main>

        <footer className={styles.footer}>
          <span>
            Produced by and &copy; 2021{' '}
            <a href="https://www.aylett.co.uk/">Andrew Aylett</a>
          </span>
        </footer>
      </div>
    </PlausibleProvider>
  );
};

export default Home;
