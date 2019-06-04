import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2018/2-plasticpollu.jpg';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <img style={{ display: 'none' }} src={backgroundImage} alt="" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Garbage finder
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Help collecting garbage today
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        onClick={props.clickHandler}
      >
        I'm in
      </Button>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
