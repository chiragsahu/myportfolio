export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-GKW8SZDRZ1', {
      page_path: window.location.pathname,
    });
  }
};

export const logPageView = (pagePath) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-GKW8SZDRZ1', {
      page_path: pagePath,
    });
  }
};
