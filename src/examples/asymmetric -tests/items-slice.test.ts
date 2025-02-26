import { it, expect } from 'vitest';
import reducer from './items-slice';

it('returns an empty array as the initial state', () => {
    expect(reducer(undefined, { type: 'noop' })).toEqual([]);
});

it.todo('supports adding an item with the correct name', () => {
    expect.hasAssertions();
});

it.todo('prefixes ids with "item-"', () => {
    expect.hasAssertions();
});

it.todo('defaults new items to a packed status of false', () => {
    expect.hasAssertions();
});

it.todo('supports removing an item', () => {
    expect.hasAssertions();
});

it.todo('supports toggling an item', () => {
    expect.hasAssertions();
});

it.todo('supports updating an item', () => {
    expect.hasAssertions();
});

it.todo('supports marking all items as unpacked', () => {
    expect.hasAssertions();
});