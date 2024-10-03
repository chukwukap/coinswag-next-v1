"use client";
import { BarChartAnalytics } from "../_components/cards/BarChartAnalytics";
import OrderMetrics from "./_components/orderMetrics";
import OrdersTable from "./_components/ordersTable";
import { Command, CommandInput } from "@/components/ui/command";
import { CalendarDateRangePicker } from "@/components/common/calendarDateRangePicker";
import SelectOptions from "@/components/common/selectOptions";
import {
  EyeOff,
  Eye,
  Users,
  Banknote,
  Package2,
  PackageCheck,
} from "lucide-react";
import { useState } from "react";

function OrdersPageClient() {
  const [showChart, setShowChart] = useState(false);
  const handleShowChart = () => {
    setShowChart(!showChart);
  };
  return (
    <div>
      <div className="flex justify-between items-center my-8">
        <h1>orders</h1>{" "}
        <button
          className="rounded-[.6rem] py-2 px-3 text-sm flex items-center justify-center gap-2 bg-white text-black"
          onClick={handleShowChart}
        >
          {showChart ? (
            <EyeOff color="black" className="w-5" />
          ) : (
            <Eye color="black" className="w-5" />
          )}
          {showChart ? "Hide Analytics" : "View Analytics"}
        </button>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <OrderMetrics icon={<Banknote />} title="Total Profit" />
        <OrderMetrics icon={<Package2 />} title="OrdersPageClient" />
        <OrderMetrics icon={<Users />} title="Customers" />
        <OrderMetrics icon={<PackageCheck />} title="Delivered Products" />
      </div>
      {showChart && (
        <BarChartAnalytics
          chartStyles="w-full h-[24rem] px-8 pt-14 pb-8 rounded-[.8rem] "
          cardStyles="rounded-[.7rem]  border border-borderColor mt-8 "
          cardContentStyles="p-0"
          cardHeaderStyles="hidden"
        />
      )}
      <div className="mt-8">
        <Command className="bg-primary border-none">
          <div className="flex justify-between items-center gap-6 h-[2.8rem]">
            <CommandInput
              className="border border-borderColor w-full"
              placeholder="Search shop..."
            />
            <div className="flex justify-center items-center gap-2 h-full">
              <CalendarDateRangePicker />
              <SelectOptions />
            </div>
          </div>
          <OrdersTable />
        </Command>
      </div>
    </div>
  );
}
export default OrdersPageClient;
