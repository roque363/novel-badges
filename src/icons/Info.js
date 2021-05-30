import SvgIcon from '@material-ui/core/SvgIcon';

const InfoSvg = () => (
  <>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 16L12 12"></path>
    <path d="M12 8L12.01 8"></path>
  </>
);

const Info = (props) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    style={{ fill: 'none' }}
    {...props}>
    <InfoSvg />
  </SvgIcon>
);

export default Info;
