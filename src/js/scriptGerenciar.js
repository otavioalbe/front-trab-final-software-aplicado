import axios from "axios";

async function getReembolsos() {
  const {data} = await axios.get("http://localhost:3000/reembolsos/buscar");
  console.log(data);
}
getReembolsos();
