import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import logo from "assets/logo.svg";
import caas from "assets/caas.svg";


export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '20px'}} disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="caas" width="30px" />
        ) : (
          <img src={caas} alt="caas" width="120px" />
        )}
      </Link>
    </Button>
  );
};
