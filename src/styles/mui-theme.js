import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as colors from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: colors.blue400,
    primary2Color: colors.blue300,
    primary3Color: colors.grey400,
    accent1Color: colors.indigo700,
    accent2Color: colors.grey100,
    accent3Color: colors.grey500,
    textColor: colors.darkBlack,
    alternateTextColor: colors.white,
    canvasColor: colors.white,
    borderColor: colors.grey300,
    disabledColor: colors.grey300,
    pickerHeaderColor: colors.blue400,
    clockCircleColor: colors.black100,
    shadowColor: colors.fullBlack,
  },
});

export default muiTheme;
