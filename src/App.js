import * as React from 'react' ;

const Main = React.lazy(() => import('./pages/Main')) ;

const App = () => {
  return (
	<Main />
  );
}

export default App;
