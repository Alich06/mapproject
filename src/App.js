import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import Map from "./component/Map";


export default function App() {
  return (
    <Router>
      <QueryParamsDemo />
    </Router>
  );
}

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function QueryParamsDemo() {
  let query = useQuery();

  return (
    <route>
        <Link hidden to="/?map=?"></Link>
        <Map map={query.get("map")} />
    </route>
  );
}

