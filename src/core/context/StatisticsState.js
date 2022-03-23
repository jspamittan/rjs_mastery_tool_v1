import { useState } from "react"

export const StatisticsState = () => {
    const [chart, setChart] = useState(null)
    // const [overview, setOverview] = useState({
    //     affected: 300,
    //     death: 5,
    //     recovered: 1,
    //     active: 200,
    //     serious: 20
    // })

    const [overview, setOverview] = useState([
        {id: 1, name: 'templates', value: 0},
        {id: 34, name: 'tEmplates', value: 0},
        {id: 123, name: 'templates', value: 0},
        {id: 6, name: 'contents', value: 0},
        {id: 5324234, name: 'contents', value: 0},
        {id: 5324235, name: 'contents', value: 0}
    ])

    return {
        chart: {data: chart, set: setChart},
        overview: {data: overview, set: setOverview},
    }
}