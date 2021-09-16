import { footerDiv } from './constants';
import {
  Facebook,
  GitHub,

  LinkedIn,

} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { classes } from 'istanbul-lib-coverage';
import { Link } from 'react-router-dom';

function Footer() {
  return <div className={footerDiv} style={{
    backgroundColor: '#f2e9e4',
    padding: '5vh 20vw 5vh 10vw',
    color:"black",

    margin: "0px ",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  }}>


    <div>
      <h6>
        This code is available on github,
        give a star if u like it
      </h6>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<GitHub />}
        onClick={() => {
          window.location.href = 'github repo link hak code githuhb ge upload madi';
        }}
      >
        Github
      </Button>
    </div>

    <div>
      <h6>You can find me on.</h6>
      <Link
        to={{ pathname: "https://github.com//ninde username hak" }}
        target='_blank'
        aria-label='Github'
      ><GitHub style={{color:"black"}}/></Link>
      <Link
        to={{ pathname: "https://www.facebook.com//ninde username hak" }}
        target='_blank'
        aria-label='facebook'
      ><Facebook style={{color:"black"}}/></Link>
      <Link
        to={{ pathname: "https://www.linkedin.com/in/ninde username hak" }}
        target='_blank'
        aria-label='LinkedIn'
      ><LinkedIn style={{color:"black"}}/></Link>
      
      
    </div>
  </div>;
}

export default Footer;


// 0f3460