import AppHeader from "@/components/header/app.header";
import MainSlider from "@/components/main/main.slider";
import { sendRequest } from "@/utils/api";


import { Container } from "@mui/material";

export default async function HomePage() {


  const party = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://locolhost:8000/api/v1",
    method: "POST",
    body: { category: "PARTY", limit: 1 }
  });

  const chills = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "CHILL", limit: 10 },
  })

  const workouts = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "WORKOUT", limit: 10 },
  })

  // console.log("Check type", res.data[0].url); 

  return (
    <div>
      <Container>
        <MainSlider 
            data={party?.data ?? []}

        />
        <MainSlider
          data={chills?.data ?? []}
        />
        <MainSlider 
           data={workouts?.data ?? []}
        />
      </Container>
    </div>
  );
}
