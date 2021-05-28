import SvgIcon from '@material-ui/core/SvgIcon';

const ImageOutlineSvg = () => (
  <>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <path d="M21 15L16 10 5 21"></path>
  </>
);

const ImageOutline = (props) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ fill: 'none' }}
    {...props}>
    <ImageOutlineSvg />
  </SvgIcon>
);

export default ImageOutline;
