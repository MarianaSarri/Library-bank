import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from '../lib/components.module';
import { MenuComponent } from '../lib/menu/menu.component';

const meta: Meta<MenuComponent> = {
  title: 'Components/Menu',
  component: MenuComponent,
  decorators: [
    moduleMetadata({
      imports: [ComponentsModule, RouterTestingModule.withRoutes([])],
    }),
  ],
};

export default meta;

type Story = StoryObj<MenuComponent>;

export const Default: Story = {};
