import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={["Rent", "Repair Service Fees", "Maintenance Fees", "Leasing Fees", "Late Fees"]}
      indexBy="Month"
      groupMode={isDashboard ? 'grouped' : 'stacked'} // the main style
      margin={{ top: 50, right: 160, bottom: 50, left: 80 }}
      padding={isDashboard ? 0.1 : 0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: 'accent' }}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      /* GRID & AXES */
      enableGridY={isDashboard ? false : true}
      gridYValues={[35, 40, 45, 50]} // specify values; // not working: gridYValues={(values) => values.filter((value) => value !== 0)}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Month", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Revenue", // changed
        legendPosition: "middle",
        legendOffset: -60,
        format: (value) => { if (value % 10 !== 0) { return "" } else if (value !== 0) { return `$${value}k` } } //formatted tick value, skip formating 0, and only keep tens.
      }}
      /* LABELS */
      enableLabel={isDashboard ? false : true} // the numbers on the bar
      label={d => `$${d.value}k`} // fomatted value
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 2.8]],
      }}
      /* LEGENDS */
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 0.5,
              },
            },
          ],
        },
      ]}
      isInteractive={true}
      tooltip={() => { }}
      role="application"
      ariaLabel="Revenue bar chart"
      barAriaLabel={e => e.id + ": " + e.formattedValue + " in Month: " + e.indexValue}
    />
  );
};

export default BarChart;
