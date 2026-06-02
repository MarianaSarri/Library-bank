import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ComponentsModule } from '../lib/components.module';
import { ConfirmationDialogComponent } from '../lib/confirmation-dialog/confirmation-dialog.component';

const meta: Meta<ConfirmationDialogComponent> = {
  title: 'Components/ConfirmationDialog',
  component: ConfirmationDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [ComponentsModule],
    }),
  ],
  argTypes: {
    onClose: { action: 'closed' },
    onConfirm: { action: 'confirmed' },
  },
};

export default meta;

type Story = StoryObj<ConfirmationDialogComponent>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Excluir transação',
    description: 'Tem certeza que deseja excluir esta transação permanentemente?',
    confirmLabel: 'Excluir',
    cancelLabel: 'Cancelar',
  },
};
