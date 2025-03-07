import { PackingList } from '.';
import { expect, it } from 'vitest';
import { render as baseRender, screen } from '../../test/utilities';
import { createStore } from './store';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

const render: typeof baseRender = (Component, options) => {
  const store = createStore();

  const Wrapper = ({ children }: PropsWithChildren) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return baseRender(Component, { ...options, wrapper: Wrapper });
};

it('renders the Packing List application', () => {
  render(<PackingList />);
});

it('has the correct title', async () => {
  render(<PackingList />);
  screen.getByText('Packing List');
});

it('has an input field for a new item', () => {
  render(<PackingList />);
  screen.getByLabelText('New Item Name');
});

it('has a "Add New Item" button that is disabled when the input is empty', () => {
  render(<PackingList />);
  const newItemInput = screen.getByLabelText('New Item Name');
  const addNewButton = screen.getByRole('button', { name: 'Add New Item' });

  expect(newItemInput).toHaveValue('');
  expect(addNewButton).toBeDisabled();
});

it('enables the "Add New Item" button when there is text in the input field', async () => {
  const { user } = render(<PackingList />);
  const newItemInput = screen.getByLabelText('New Item Name');
  const addNewButton = screen.getByRole('button', { name: 'Add New Item' });

  await user.type(newItemInput, 'New Item');
  expect(addNewButton).toBeEnabled();
});

it('adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = render(<PackingList />);
  const newItemInput = screen.getByLabelText('New Item Name');
  const addNewButton = screen.getByRole('button', { name: 'Add New Item' });

  await user.type(newItemInput, 'Apple watch');
  await user.click(addNewButton);

  expect(screen.getByLabelText('Apple watch')).not.toBeChecked();
});

it('Remove an item', async () => {
  const { user } = render(<PackingList />);
  const newItemInput = screen.getByLabelText('New Item Name');
  const addNewButton = screen.getByRole('button', { name: 'Add New Item' });

  await user.type(newItemInput, 'Apple watch');
  await user.click(addNewButton);

  const item = screen.getByLabelText('Apple watch');
  const removeButton = screen.getByRole('button', {
    name: 'Remove Apple watch',
  });

  await user.click(removeButton);

  expect(item).not.toBeInTheDocument();
});
