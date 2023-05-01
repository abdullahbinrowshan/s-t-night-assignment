import React from 'react'
import { useLoaderData } from 'react-router-dom'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const Statistics = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div className='container inline-flex h-[75vh] w-full items-center justify-center my-14 mx-auto p-3'>
            <ComposedChart
                width={360}
                height={300}
                data={data}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
        </div>
    )
}

export default Statistics