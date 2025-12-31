import '../styles/globals.css';
import NavBar from '../components/NavBar';
import PageTransition from '../components/PageTransition';
import CustomCursor from '../components/CustomCursor';
import BackgroundMedia from '../components/BackgroundMedia';
import ClientLayout from '../components/ClientLayout';

export const metadata = {
  title: 'EMS-based Directional Feedback for UAV Swarm Search',
  description: 'Research project — reducing visual load in human–swarm interaction'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          <CustomCursor />
          <BackgroundMedia media="/media/preview.gif" poster="/6.png" img="/6.png" />
          <div className="min-h-screen">
            <div className="container px-6 py-10">
              <NavBar />
              <main>
                <PageTransition>{children}</PageTransition>
              </main>
              <footer className="mt-16 text-sm text-slate-500">
                © {new Date().getFullYear()} EMS Swarm HCI — Placeholder.
              </footer>
            </div>
          </div>
        </ClientLayout>
      </body>
    </html>
  );
}
