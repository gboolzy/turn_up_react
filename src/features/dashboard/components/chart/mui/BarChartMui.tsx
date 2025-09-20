import { BarChart } from '@mui/x-charts/BarChart';
export const BarChartMui = () => {
    return (
        <div className='md:w-[100%] overflow-scroll'>
            <BarChart
                xAxis={[
                    {
                        id: 'barCategories',
                        data: ['bar A', 'bar B', 'bar C'],
                        labelStyle: { fill: '#fff', fontSize: 14 },   // X-axis label
                        tickLabelStyle: { fill: '#fff', fontSize: 12 }
                    },
                ]}
                yAxis={[
                    {
                        labelStyle: { fill: '#fff', fontSize: 14 },  // Y-axis label
                        tickLabelStyle: { fill: '#fff', fontSize: 12 } // Y-axis ticks
                    }
                ]}
                sx={{
                    // ✅ Both X and Y axis baselines in white
                    '& .MuiChartsAxis-bottom .MuiChartsAxis-line': {
                        stroke: '#fff',
                        strokeWidth: 2,
                    },
                    '& .MuiChartsAxis-left .MuiChartsAxis-line': {
                        stroke: '#fff',
                        strokeWidth: 2,
                    },

                    // ✅ Optional: tick color
                    '& .MuiChartsAxis-tick': {
                        stroke: '#fff',
                    },
                }}
                series={[
                    {
                        data: [2, 5, 3],
                    },
                ]}
                height={300}
                
            />
        </div>
    )
}

export const BarChartMui2 = () => {
    return (
        <div>
            <BarChart
                xAxis={[{
                    data: ['group A', 'group B', 'group C'],
                    labelStyle: { fill: '#fff', fontSize: 14 },   // X-axis label
                    tickLabelStyle: { fill: '#fff', fontSize: 12 }
                }]}
                yAxis={[
                    {
                        labelStyle: { fill: '#fff', fontSize: 14 },  // Y-axis label
                        tickLabelStyle: { fill: '#fff', fontSize: 12 } // Y-axis ticks
                    }
                ]}

                sx={{
                    // ✅ Both X and Y axis baselines in white
                    '& .MuiChartsAxis-bottom .MuiChartsAxis-line': {
                        stroke: '#fff',
                        strokeWidth: 2,
                    },
                    '& .MuiChartsAxis-left .MuiChartsAxis-line': {
                        stroke: '#fff',
                        strokeWidth: 2,
                    },

                    // ✅ Optional: tick color
                    '& .MuiChartsAxis-tick': {
                        stroke: '#fff',
                    },
                }}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                height={300}
            />
        </div>
    )
}


export const BarChartMui3 = () => {
    return (
        <div className='bg-[#fff] w-[90vw]'>
            <BarChart
                // ...
                xAxis={[
                    {
                        scaleType: 'band',
                        data: ['Page 1', 'Page 2', 'Page 3'],
                        categoryGapRatio: 0.3,
                        barGapRatio: 0.1,
                        labelStyle: { fill: 'red', fontSize: 14 },   // X-axis label
                        tickLabelStyle: { fill: 'blue', fontSize: 12 }
                    },
                ]}
                yAxis={[
                    {
                        labelStyle: { fill: 'red', fontSize: 14 },  // Y-axis label
                        tickLabelStyle: { fill: 'purple', fontSize: 12 } // Y-axis ticks
                    }
                ]}
                sx={{
                    // Axis line styling
                    '& .MuiChartsAxis-line': {
                        stroke: 'red',   // axis line color
                        strokeWidth: 2,  // axis line thickness
                    },
                    // Optional: tick color
                    '& .MuiChartsAxis-tick': {
                        stroke: 'red',
                    }
                }}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                height={300}
                colors={["blue", "red", "green"]}

            />
        </div>
    )
}



