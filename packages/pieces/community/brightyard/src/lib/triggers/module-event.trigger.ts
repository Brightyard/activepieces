import {
  Property,
  TriggerStrategy,
  createTrigger,
} from '@activepieces/pieces-framework';

import {
  EVENT_OPTIONS,
  SAMPLE_EVENT_PAYLOAD,
  brightyardAuth,
} from '../common/constants';

export const brightyardModuleEventTrigger = createTrigger({
  auth: brightyardAuth,
  name: 'brightyard_event',
  displayName: 'Brightyard module event',
  description: 'Runs when Brightyard forwards a module lifecycle event to Activepieces.',
  type: TriggerStrategy.WEBHOOK,
  props: {
    moduleSlug: Property.ShortText({
      displayName: 'Module slug',
      description: 'Brightyard module identifier (configured inside Brightyard).',
      required: true,
    }),
    event: Property.StaticDropdown({
      displayName: 'Event',
      required: true,
      defaultValue: 'created',
      options: {
        options: EVENT_OPTIONS,
      },
    }),
    conditions: Property.Json({
      displayName: 'Conditions',
      description: 'Optional condition metadata applied inside Brightyard.',
      required: false,
    }),
  },
  sampleData: SAMPLE_EVENT_PAYLOAD,
  async onEnable() {
    // Brightyard pushes events directly through createFlowRun payloads, no setup required.
  },
  async onDisable() {
    // Nothing to clean up.
  },
  async run(context) {
    const payload = context.payload as unknown;
    if (payload && typeof payload === 'object') {
      const record = payload as Record<string, unknown>;
      if ('trigger' in record) {
        return [record.trigger ?? {}];
      }
    }
    return [payload ?? {}];
  },
});

