"use client";
import { BarChartAnalytics } from "./_components/cards/BarChartAnalytics";
import { PieChartAnalytics } from "./_components/cards/PieChartAnalytics";
import TotalRevenue from "./_components/cards/TotalRevenue";
import RecentOrders from "./_components/tables/RecentOrders";

function Overview() {
  return (
    <div className="">
      <p className="text-sm my-8">Analytics</p>
      <div className="analytics">
        <TotalRevenue />
        <BarChartAnalytics chartStyles="h-[18rem] w-[45rem]" />
        <PieChartAnalytics />
      </div>
      <RecentOrders />
    </div>
  );
}
export default Overview;
