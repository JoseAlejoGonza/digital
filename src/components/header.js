import React, { useEffect, useState } from 'react';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HeaderStyles from './styles/HeaderStyle'
//import { Link as Scroll } from 'react-scroll';

export default function Header() {
  const classes = HeaderStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            DRT<span className={classes.colorText}>Digital Reaction Technology</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Bienvenido a <br />
            DRT<span className={classes.colorText}>Digital Reaction Technology</span>
          </h1>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
        </div>
      </Collapse>
    </div>
  );
}
