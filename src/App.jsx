import Footer from "./Common/Footer";
import Header from "./Common/Header";
import Hero from "./Common/Hero";
import TaskBord from "./Task/TaskBord";

export default function App() {
  return (
    <>
      <Header />
      <div clssName="flex flex-col justify-center items-center">
        <Hero />
        <TaskBord />
      </div>

      <Footer />
    </>
  );
}
