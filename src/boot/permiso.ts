import { boot } from 'quasar/wrappers';
import permiso from 'src/shared/lib/directives/permisos';

export default boot(({ app }) => {
  app.directive('permiso', permiso);
});
