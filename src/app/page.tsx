import StatusLabel, { Status } from '@/app/components/status-label';
import AddCompanyButton from '@/app/components/add-company-button';
import ServerComponent from './components/server-component';
import ClientComponent from './components/client-component';
import ServerComponentCopy from './components/server-component-copy';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
     <AddCompanyButton/>
     {/* <ServerComponent/>
     <ClientComponent><ServerComponentCopy/></ClientComponent> */}
    </main>
  );
}
