function Newsitem({ title, description, src, url }) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2" 
    style={{
        flex: "1 1 250px",
        maxWidth: "300px",
        minWidth: "250px",
        margin: "16px",
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}
    >
      <img src={src} className="card-img-top " style={{height:"150px" , width:"280px"} } alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description? description.slice(0,90):"Custom News"}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
}

export default Newsitem;
