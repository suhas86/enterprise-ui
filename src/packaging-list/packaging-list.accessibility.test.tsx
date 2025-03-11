import { axe, toHaveNoViolations } from 'jest-axe';
import PackingList from '.';
import { render } from '../../test/utilities';
import { expect, it } from 'vitest';

expect.extend(toHaveNoViolations);
// When we run this test, we should see the error
// Fix accessibility violations
it.todo('should have no accessibility violations', async () => {
  const { container } = render(<PackingList />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
