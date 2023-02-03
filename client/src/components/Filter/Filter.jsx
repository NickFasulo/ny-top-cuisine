import { MultiSelect } from 'react-multi-select-component'
import './Filter.css'

const options = [
  { label: 'Price: low to high', value: 'lowToHighPrice' },
  { label: 'Rating: high to low', value: 'highToLowRating' }
]

export default function Filter({ value, onChange }) {
  return (
    <div>
      <MultiSelect
        options={options}
        value={value}
        onChange={onChange}
        className=''
        labelledBy='Select'
        hasSelectAll={false}
        disableSearch
      />
    </div>
  )
}
