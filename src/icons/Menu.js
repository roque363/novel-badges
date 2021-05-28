import SvgIcon from '@material-ui/core/SvgIcon';

const MenuSvg = () => (
  <>
    <path d="M3.8 6.6h16.4M20.2 12.1H3.8M3.8 17.5h16.4" />
  </>
);

const Menu = (props) => (
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
    <MenuSvg />
  </SvgIcon>
);

export default Menu;
