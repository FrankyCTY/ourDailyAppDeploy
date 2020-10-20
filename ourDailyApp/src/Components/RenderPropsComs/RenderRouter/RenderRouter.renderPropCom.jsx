import React from "react";

import { useHistory, useRouteMatch } from "react-router-dom";

const RenderRouter = ({ children }) => {
  function useRouter() {
    const history = useHistory();
    const match = useRouteMatch();

    return React.useMemo(() => {
      return {
        push: history.push,
        matchPath: match.path,
      };
    }, [history, match.path]);
  }

  const router = useRouter();

  return children(router);
};

export default RenderRouter;
