import SvgIcon from '@material-ui/core/SvgIcon';

const XSvg = () => (
  <>
    <path d="M18 6L6 18"></path>
    <path d="M6 6L18 18"></path>
  </>
);

const X = (props) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    {...props}>
    <XSvg />
  </SvgIcon>
);

export default X;
