import { CV } from '../components/CV/CV';

export default function HomePage() {
  return <CV />;
}

// Add this to tell Next.js this is a static page
export const getStaticProps = () => {
  return {
    props: {},
  };
};
