import { makeStyles } from '@material-ui/styles';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    zIndex: 10,
  },
};

export const useStyles = makeStyles(styles);

export default styles;
