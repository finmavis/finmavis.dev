import Typography from 'typography';
import fairyGateThemes from 'typography-theme-fairy-gates';

fairyGateThemes.overrideThemeStyles = ({ rhythm, scale }, options) => {
  return {
    a: {
      background: 'none',
      color: '#5e9bea',
      textShadow: 'none',
      textDecoration: 'none',
      boxShadow: '0 1px 0 0 currentColor',
    },
    blockquote: {
      borderLeft: '0.1rem solid #1ca086',
    },
  };
};

const typography = new Typography(fairyGateThemes);

export const { scale, rhythm, options } = typography;
export default typography;
