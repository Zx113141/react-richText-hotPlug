import { SearchOutlined } from '@ant-design/icons';
import { Select, Button} from 'antd';

const FontSize = (props: any) => {
    const { change,type } = props
    const options = [
        {
            value: '16px',
            label: '16px',
        },
        {
            value: '20px',
            label: '20px',
        },
        {
            value: '30px',
            label: '30px',
        },
    ]
    return (
        <Select
            style={{ width: 120 }}
            defaultValue={'16px'}
            bordered={false}
            onSelect={(key,) => change(type, key)}
            options={options}
        />
        // <Button onClick={() => change(type, 10)}>20像素</Button>
    )
}
export default FontSize