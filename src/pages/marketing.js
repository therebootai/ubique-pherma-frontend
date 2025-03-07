import MainTemplate from "@/templates/MainTemplate";
import Banner from "@/components/global/Banner";
export default function Marketing() {
  return (
    <MainTemplate>
      <Banner />
      <div className="flex justify-center items-center h-[50vh] text-3xl text-defined-brown">Coming Soon</div>
    </MainTemplate>
  );
}
