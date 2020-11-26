const env = "dev";
const Url = env === "dev" ? `${process.env.REACT_APP_URL}` : "/api/v1";

export default Url;