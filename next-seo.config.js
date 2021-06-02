const site = `https://${process.env.VERCEL_URL}`;
const siteName = 'Canaltech';
const description = 'Clone do Canaltech usando TailwindCSS.';
const keywords = 'Canaltech, clone, tailwind, css';

export default {
  defaultTitle: siteName,
  titleTemplate: `%s | ${siteName}`,
  description,
  keywords,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    site_name: siteName,
    description,
  },
};
