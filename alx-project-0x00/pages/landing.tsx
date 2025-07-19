import Card from "@/components/Card";
import Button from "@/components/Button";

//Card function
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
    </div>
  );
};

//Button function
const LandingButtons: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6">
      {/* Small buttons */}
      <Button title="Small Rounded-sm" style="text-sm rounded-sm" />
      <Button title="Small Rounded-md" style="text-sm rounded-md" />
      <Button title="Small Rounded-full" style="text-sm rounded-full" />

      {/* Medium buttons */}
      <Button title="Medium Rounded-sm" style="text-base rounded-sm" />
      <Button title="Medium Rounded-md" style="text-base rounded-md" />
      <Button title="Medium Rounded-full" style="text-base rounded-full" />

      {/* Large buttons */}
      <Button title="Large Rounded-sm" style="text-lg rounded-sm" />
      <Button title="Large Rounded-md" style="text-lg rounded-md" />
      <Button title="Large Rounded-full" style="text-lg rounded-full" />
    </div>
  );
};

export default Landing;
