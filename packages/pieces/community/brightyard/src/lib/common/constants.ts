import { PieceAuth } from '@activepieces/pieces-framework';

export const brightyardAuth = PieceAuth.None();

export const EVENT_OPTIONS: Array<{ label: string; value: string }> = [
  { label: 'Created', value: 'created' },
  { label: 'Updated', value: 'updated' },
  { label: 'Deleted', value: 'deleted' },
  { label: 'Status updated', value: 'status_updated' },
];

export const SAMPLE_EVENT_PAYLOAD = {
  workspaceId: 'workspace-id',
  moduleSlug: 'contact',
  event: 'created',
  recordId: 'record-id',
  fields: {
    firstName: 'Ada',
    lastName: 'Lovelace',
    email: 'ada@example.com',
  },
  conditions: [
    {
      field: 'priority',
      operator: 'equals',
      value: 'Critical',
    },
  ],
};

