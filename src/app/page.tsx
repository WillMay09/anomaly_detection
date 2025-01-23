import WelcomeScreen from "@/components/welcome";
import { RegressionHeatMap } from "@/components/regressionHeatMap";
export default function Home() {
  return (
    <main>
      <WelcomeScreen />
      <RegressionHeatMap />
    </main>
  );
}
