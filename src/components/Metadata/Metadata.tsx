import Head from 'next/head';

import { META_TAGS_DEFAULT_CONFIG } from '@app/constants/metadata';

export interface MetadataProps {
  twitterCardType?: string;
  twitterCreator?: string;
  twitterImageAlt?: string;
  twitterCite?: string;
  title?: string;
  description?: string;
  image?: string | null | undefined;
}

const Metadata: React.FC<MetadataProps> = ({
  twitterCardType = META_TAGS_DEFAULT_CONFIG.twitterCardType,
  twitterCreator = META_TAGS_DEFAULT_CONFIG.twitterCreator,
  twitterImageAlt = META_TAGS_DEFAULT_CONFIG.twitterImageAlt,
  twitterCite = META_TAGS_DEFAULT_CONFIG.twitterCite,
  title = META_TAGS_DEFAULT_CONFIG.title,
  description = META_TAGS_DEFAULT_CONFIG.description,
  image
}) => (
  <Head>
    <meta name="description" content={description} />
    <meta name="title" content={title} />
    <title>{title}</title>
    <meta name="twitter:card" content={twitterCardType} />
    <meta property="twitter:url" content={META_TAGS_DEFAULT_CONFIG.url} />
    <meta name="twitter:creator" content={twitterCreator} />
    <meta name="twitter:title" content={title} />
    <meta
      name="twitter:image"
      content={image || META_TAGS_DEFAULT_CONFIG.image}
    />
    <meta name="twitter:image:alt" content={twitterImageAlt} />
    <meta name="twitter:site" content={twitterCite} />
    <meta name="twitter:description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:url" content={META_TAGS_DEFAULT_CONFIG.url} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={description} />
    <meta
      property="og:image"
      content={image || META_TAGS_DEFAULT_CONFIG.image}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);

export default Metadata;
