import AppHeader from "@/components/header/app.header";
import MainSlider from "@/components/main/main.slider";
import { sendRequest } from "@/utils/api";


import { Container } from "@mui/material";

export default async function HomePage() {


  const res = await sendRequest<IBackendRes<IRequest[]>>({
    url: "http://locolhost:8000/api/v1",
    method: "POST",
    body: { category: "CHILL", limit: 1 }
  });

  // console.log("Check type", res.data[0].url); 

  return (
    <div>
      <Container>
        <MainSlider />
        <MainSlider />
        <MainSlider />
      </Container>
    </div>
  );
}
