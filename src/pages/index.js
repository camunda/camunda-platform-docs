import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "I'm new here, and want to get started",
    imageUrl:
      "https://visualpharm.com/assets/947/Address-595b40b75ba036ed117d530f.svg",
    description:
      "Visit our guides section to learn more about creating an account, modeling your first process, orchestrating human and service tasks, and more!",
  },
  {
    title: "I'm looking for a particular component",
    imageUrl:
      "https://visualpharm.com/assets/997/Track%20Order-595b40b85ba036ed117db5b3.svg",
    description:
      "Find product manual content for each component in Camunda 8. Together, these components comprise the Camunda 8 SaaS experience.",
  },
  {
    title: "I want to host Camunda 8 myself",
    imageUrl:
      "https://visualpharm.com/assets/758/Order%20Delivered-595b40b75ba036ed117d6a43.svg",
    description:
      "As an alternative to using Camunda 8 through SaaS, you can host it yourself. We call this setup Camunda 8 Self-Managed!",
  },
  {
    title: "I'm an API advocate",
    imageUrl:
      "https://visualpharm.com/assets/6/Electricity-595b40b75ba036ed117d8c37.svg",
    description:
      "Deploy processes, activate jobs, and more using Zeebe client libraries, learn about Camunda components and their APIs, or check out community clients turned SDKs!",
  },
  {
    title: "I want to level up with Best Practices",
    imageUrl:
      "https://visualpharm.com/assets/955/Dumbbell-595b40b75ba036ed117d5d25.svg",
    description:
      "Sift through conceptual and practical guidance to level up your BPMN and DMN skills, incorporating insights from consulting, community feedback, and more.",
  },
  {
    title: "I'm looking for general reference material",
    imageUrl:
      "https://visualpharm.com/assets/79/File-595b40b65ba036ed117d093e.svg",
    description:
      "Take a closer look at release notes, announcements, supported environments, licenses, and more in our reference documentation!",
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Orhestrate complex process flows, automate across people, systems, and devices, and transform your organization."
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="row">
            <div className={clsx("col col--offset-3 col--3", styles.buttons)}>
              <Link
                className={clsx(
                  "button button--outline button--secondary button--lg button--hero get-started",
                  styles.getStarted
                )}
                to={useBaseUrl("docs/guides/")}
              >
                What's Camunda 8?
              </Link>
            </div>
            <div className={clsx("col col--3", styles.buttons)}>
              <Link
                className={clsx(
                  "button button--outline button--secondary button--lg sign-up",
                  styles.getStarted
                )}
                to={useBaseUrl(
                  "https://signup.camunda.com/accounts?utm_source=docs.camunda.io&utm_medium=referral"
                )}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className={clsx("hero hero--secondary", styles.heroBanner)}>
          <div className="container">
            <div class="textbox">
              <h2 className="hero__title" class="hero-title-footer">
                Try out our new SDKs!
              </h2>
              <p className="hero__subtitle" class="hero-subtitle-footer">
                For both <a href="/docs/apis-tools/node-js-sdk.md">Node.js</a>{" "}
                and{" "}
                <a href="/docs/apis-tools/spring-zeebe-sdk/getting-started.md">
                  Spring Zeebe
                </a>
                ,<br></br>check out our latest software development kits.
              </p>
            </div>
            <div class="imagebox">
              <img
                src="https://visualpharm.com/assets/691/Chevron%20Right-595b40b75ba036ed117d58b5.svg"
                alt="arrow icon pointing right"
                height="200px"
                width="300px"
              ></img>
            </div>
            <div class="imagebox">
              <script>Some code</script>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
