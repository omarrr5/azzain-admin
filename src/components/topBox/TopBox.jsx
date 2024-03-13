import "./topBox.scss"
import {topSales} from "../../data.js"

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Latest Sales</h1>
      <div className="list">
        {topSales.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src="/money.png" alt="" />
              <div className="userTexts">
                <span className="transID">{user.transID}</span>
                <span className="method">{user.method}</span>
              </div>
            </div>
            <span className="amount">RM{user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox