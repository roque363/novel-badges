import SvgIcon from '@material-ui/core/SvgIcon';

const LayersOutlineSvg = () => (
  <>
    <path d="M12 2L2 7 12 12 22 7 12 2z"></path>
    <path d="M2 17L12 22 22 17"></path>
    <path d="M2 12L12 17 22 12"></path>
  </>
);

const LayersOutline = (props) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <LayersOutlineSvg />
  </SvgIcon>
);

export default LayersOutline;
