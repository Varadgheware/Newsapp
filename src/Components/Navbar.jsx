
export default function Navbar({ setCategeory }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge text-bg-light text-dark fs-4">Navbar</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" onClick={() => setCategeory("business")}>Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" onClick={() => setCategeory("health")}>Health</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" onClick={() => setCategeory("sports")}>Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" onClick={() => setCategeory("science")}>Science</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}