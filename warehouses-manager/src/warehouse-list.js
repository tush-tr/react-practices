import Card from "./datacard"
import "./warehouse-list.css"
const WarehouseList = ({warehouses}) => {
    return (
        <div className="Container">
            {warehouses.map((item) => (
                <Card {...item} key={item.id} />
            ))}
        </div>
    )
}
export default WarehouseList;