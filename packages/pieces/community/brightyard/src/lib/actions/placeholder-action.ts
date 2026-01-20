import { createAction, Property } from '@activepieces/pieces-framework';

import { brightyardAuth } from '../common/constants';

export const brightyardPlaceholderAction = createAction({
  auth: brightyardAuth,
  name: 'brightyard_placeholder',
  displayName: 'Brightyard Placeholder',
  description: 'No-op placeholder so Brightyard-only nodes keep the Activepieces graph in sync.',
  props: {
    payload: Property.Json({
      displayName: 'Payload',
      description: 'Optional payload forwarded to the next Brightyard node.',
      required: false,
    }),
  },
  async run(context) {
    return context.propsValue.payload ?? {};
  },
});

