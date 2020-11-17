const env = "dev";
const Url = env === "prod" ? `${process.env.REACT_APP_URL}` : "/api/v1";

export default Url;