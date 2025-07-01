import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';

import MainPage from './page';

describe('Index Page', () => {
  it('should be render', () => {
    render(<MainPage />);

    expect(screen.getByText(/Stylish/)).toBeInTheDocument();
    expect(screen.getByAltText('Next.js logo')).toBeInTheDocument();

    expect(screen.getByText(/Get started by editing/)).toBeInTheDocument();
    expect(screen.getByText('src/app/page.tsx')).toBeInTheDocument();

    expect(
      screen.getByText('Save and see your changes instantly.'),
    ).toBeInTheDocument();

    const buttonDeploy = screen.getByRole('link', { name: /Deploy now/i });
    expect(buttonDeploy).toBeInTheDocument();
    expect(buttonDeploy).toHaveAttribute(
      'href',
      expect.stringContaining('vercel.com/new'),
    );

    const buttonDoc = screen.getByRole('link', { name: /Read our docs/i });
    expect(buttonDoc).toBeInTheDocument();
    expect(buttonDoc).toHaveAttribute(
      'href',
      expect.stringContaining('nextjs.org/docs'),
    );

    expect(screen.getByText(/Make your NEXT app stylish/)).toBeInTheDocument();
  });
});
