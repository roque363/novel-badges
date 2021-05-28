import SvgIcon from '@material-ui/core/SvgIcon';

const KanbanOutlineSvg = () => (
  <>
    <path
      d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
C3.9,4.4,4.4,3.9,5.1,3.9z"
    />
    <path d="M4.2,9.3h15.6" />
    <path d="M9.1,9.5v10.3" />
  </>
);

const KanbanOutline = (props) => (
  <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <KanbanOutlineSvg />
  </SvgIcon>
);

export default KanbanOutline;
