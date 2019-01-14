import axios from "axios";

const KEY = "AIzaSyAdYykTByK_459H2nzImORaDghFEjni5Ow";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
