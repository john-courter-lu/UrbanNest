import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const PieChart = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsivePie
      data={data}
      theme={{
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

      colors={{ scheme: 'accent' }}

      tooltip={({ value, label }) => (
        <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '8px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <strong style={{ color: 'blue' }}>{label}</strong>: <span style={{ color: 'red' }}>{value}</span>
        </div>
      )} // doesn't work, maybe because of the version

      valueFormat=" ^-$.2f"

      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}

      activeInnerRadiusOffset={4}
      activeOuterRadiusOffset={10}

      arcLinkLabelsSkipAngle={10}

      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsColor={{ from: "color" }}

      arcLinkLabelsThickness={2}
      arcLinkLabelsTextOffset={3}
      arcLinkLabelsDiagonalLength={8}
      arcLinkLabelsStraightLength={12}

      enableArcLinkLabels={true}
      arcLinkLabel={e => "$" + e.value}

      enableArcLabels={true}
      arcLabel="id"

      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}

      legends={
        [
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 15, //change the x position
            translateY: 56, //change the y position
            itemsSpacing: 0,
            itemWidth: 95,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
    />
  );
};

export default PieChart;
