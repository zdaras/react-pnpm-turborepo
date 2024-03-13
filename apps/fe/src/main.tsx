import { createRoot } from 'react-dom/client';
import { App } from '#/routes/App';
import { initi18 } from '#/services/locale/i18n';

initi18();

createRoot(document.getElementById('root') as Element).render(<App />);
