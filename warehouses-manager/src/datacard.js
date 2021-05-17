import "./datacard.css"
const Card = ({ name, city, space_available, cluster }) => {
    return (
        <div className="warehouse-card">
            <div className="ColDetail">
                <div className="Header">
                    <div className="warehouse-title">{name}</div>
                </div>
                <div className="warehouse-city"><i className="fas fa-map-marker-alt"></i> {city}</div>
                <div className="warehouse-space">
                    <b>Space Available:</b>
                    {space_available}
                </div>
                <div className="warehouse-cluster">
                    <b>Cluster:</b> {cluster}
                </div>
            </div>
        </div>
    )
}
export default Card;