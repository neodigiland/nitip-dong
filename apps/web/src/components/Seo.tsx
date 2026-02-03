import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  name?: string;
  type?: string;
}

export default function Seo({ 
  title, 
  description, 
  canonical, 
  name = 'Nitip Dong', 
  type = 'website' 
}: SeoProps) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:site_name" content={name} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
      
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}
