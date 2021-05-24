import useMediaQuery from '@material-ui/core/useMediaQuery';

const useResponsive = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  const isTablet = useMediaQuery('(min-width: 600px) and (max-width: 960px)');

  const isDesktop = useMediaQuery('(min-width: 960px)');

  return {
    isDesktop: isDesktop,
    isTablet: isTablet,
    isMobile: isMobile,
  };
};

export default useResponsive;
