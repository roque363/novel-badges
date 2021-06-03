import SvgIcon from '@material-ui/core/SvgIcon';

const TagSvg = () => (
  <>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"></path>
    <path d="M7 7L7.01 7"></path>
  </>
);

const Tag = (props) => (
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
    <TagSvg />
  </SvgIcon>
);

export default Tag;
