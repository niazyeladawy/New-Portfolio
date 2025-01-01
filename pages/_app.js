import '@/styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ResumeDataProvider } from '@/context/ResumeContext';
import Layout from '@/components/Layout';

config.autoAddCss = false;
export default function App({ Component, pageProps }) {


  return (
    <ResumeDataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ResumeDataProvider>

  )
}
