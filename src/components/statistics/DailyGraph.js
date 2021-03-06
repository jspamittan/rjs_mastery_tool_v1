import { Box } from '@mui/material'
import { Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ComposedChart, Line  } from 'recharts';


export const DailyGraph = () => {

  const data = [
    {
      name: 'July 2022',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Aug. 2022',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Sept. 2022',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Oct. 2022',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Nov. 2022',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Dec. 2022',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];


    return (
        <Box component="b">Mastery Tool
          <ComposedChart
            layout="vertical"
            width={950}
            height={500}
            data={data}
            margin={{
              top: 20,
              right: 80,
              bottom: 20,
              left: 40,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" scale="band" />
            <Tooltip />
            <Legend />
            <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </Box> 
    )
}