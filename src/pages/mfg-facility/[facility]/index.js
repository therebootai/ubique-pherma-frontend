import Banner from "@/components/global/Banner";
import TrackOrderSection from "@/components/mfg-facility/TrackOrderSection";
import MainTemplate from "@/templates/MainTemplate";
import { useRouter } from "next/router";

export default function FacilityPage() {
    const router = useRouter();
    if(router.query.facility === "customer" || router.query.facility === "product-approval") {
        return (
            <MainTemplate>
                <Banner />
                <div className="flex justify-center items-center h-[50vh]">
                    <h1 className="text-4xl font-bold text-defined-brown">Coming Soon...</h1>
                </div>
            </MainTemplate>
        );
    }
    return (
      <MainTemplate>
        <Banner />
        <TrackOrderSection />
      </MainTemplate>
    );
}