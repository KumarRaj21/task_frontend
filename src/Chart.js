import {ResponsiveContainer,Bar, XAxis} from 'recharts';
const array = [{
    name:0-100,
},
{
    name:0-200,

}]

const Chart = () => {
  return (
    <ResponsiveContainer width='50%' aspect={3}>
        <Bar data={array}>
            <XAxis dataKey="name"></XAxis>
        </Bar>
    </ResponsiveContainer>
  )
}

export default Chart