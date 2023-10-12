import Nav from "./routes";
import makeServer from "./mirageServer/server";

// Please keep on when possible to avoid using up our Tasty API free quota
// All api calls will be intercepted and fulfilled by the mirage server.
const USE_MIRAGE_API = true;

if (USE_MIRAGE_API) {
  makeServer();
}

function App() {
  return (
    <>
      <Nav />
    </>
  );
}

export default App;
