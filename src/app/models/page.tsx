
import ModelDropDown from "@/components/modelDropDown";
export default function ModelsPage() {

    const models = ["linearRegression"]
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <ModelDropDown models={models} />
    </div>
  );
}
