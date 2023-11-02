import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const PieChart = ({ data, isDashboard = false, isPrimary = true }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const legendMode = () => { // cannot use a direct if...else statement as a value when defining an object's property; so use an independent function
    if (!isDashboard) {
      return [ // for regular independent page
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
      ]
    } else if (isPrimary) {
      return [ // for Dashboard and iPrimary
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 90,
          translateY: 0,
          itemWidth: 100,
          itemHeight: 20,
          itemsSpacing: 5,
          symbolSize: 20,
          symbolShape: "circle", //otherwise would be square
          itemDirection: 'left-to-right'
        }
      ]
    } else { // for Dashboard and non-Primary
      return []
    }
  }

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

      enableArcLabels={isDashboard ? false : true}
      arcLabel="id"

      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}

      legends={legendMode()} // Have to call the function, not just the name 

    />
  );
};

export default PieChart;
