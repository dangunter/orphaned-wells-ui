import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  //Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  Img: React.ComponentType<React.ComponentProps<'img'>>;
  description: JSX.Element;
};


const FeatureList: FeatureItem[] = [
  {
    title: 'Digitize Documents',
    Img: require('@site/static/img/ogrre-pdf-to-data.png').default,
    description: (
      <>
      Use advanced AI/ML (e.g. Google DocAI) to extract fields from scanned documents.
      </>
    ),
  },
  {
    title: 'Review Documents',
    Img: require('@site/static/img/ogrre-review.png').default,
    description: (
      <>
      Review and correct digitized data with an intuitive user interface.
      </>
    ),
  },
  {
    title: 'Export Results',
    Img: require('@site/static/img/ogrre-db.png').default,
    description: (
      <>
      Export resulting data in convenient forms for integration with your database.
      </>
    ),
  }
];

function Feature({title, Img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} role="img" className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
