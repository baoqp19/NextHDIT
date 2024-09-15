import AppHeader from "@/components/header/app.header";
import MainSlider from "@/components/main/main.slider";
import { sendRequestJS } from "@/utils/old.api"

import { Container } from "@mui/material";

export default async function HomePage() {


  const res = await sendRequestJS({
    url: "http://locolhost:8000/api/v1",
    method: "POST",
    body: { category: "CHILL", limit: 1 }
  });
 
  console.log(res);

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
