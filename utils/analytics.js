import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-10FGRW5NRK');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
