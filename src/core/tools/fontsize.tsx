import { SearchOutlined } from '@ant-design/icons';
import { Select, } from 'antd';

const FontSize = (props: any) => {
    const { change,type } = props
    const options = [
        {
            value: 16,
            label: '16px',
        },
        {
            value: 20,
            label: '20px',
        },
        {
            value: 30,
            label: '30px',
        },
    ]
    return (
        <Select
            style={{ width: 120 }}
            defaultValue={16}
            bordered={false}
            onSelect={(key,) => change(type, key)}
            options={options}
        />
    )
}
export default FontSize