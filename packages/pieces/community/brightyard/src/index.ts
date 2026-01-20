import { createPiece } from '@activepieces/pieces-framework';
import { PieceCategory } from '@activepieces/shared';

import { brightyardAuth } from './lib/common/constants';
import { brightyardPlaceholderAction } from './lib/actions/placeholder-action';
import { brightyardModuleEventTrigger } from './lib/triggers/module-event.trigger';

export const brightyard = createPiece({
  displayName: 'Brightyard ',
  description: 'Bridge automations with Activepieces connectors.',
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.activepieces.com/pieces/brightyard.png',
  categories: [PieceCategory.CORE, PieceCategory.DEVELOPER_TOOLS],
  authors: ['brightyard'],
  auth: brightyardAuth,
  actions: [brightyardPlaceholderAction],
  triggers: [brightyardModuleEventTrigger],
});

