const milestone = {
    dsgy: {
        firstPurchaseTime: "",
        successes: 0
    },
    esjf: {
        firstPurchaseTime: "",
        successes: 0
    },
    gdxq: {
        firstPurchaseTime: "",
        successes: 0
    },
    cydf: {
        firstPurchaseTime: "",
        successes: 0
    },
    slpw: {
        firstPurchaseTime: "",
        successes: 0
    },
    yxjjhz: {
        firstPurchaseTime: "",
        successes: 0
    },
    nhgddz: {
        firstPurchaseTime: "",
        successes: 0
    },
    dtycbs: {
        firstPurchaseTime: "",
        successes: 0
    },
    rdxdbs: {
        firstPurchaseTime: "",
        successes: 0
    },
    hxymjd: {
        firstPurchaseTime: "",
        successes: 0
    }
}
const marketGoods = {
    gdxy: {
        name: "高档香烟",
        price: 1000,
        cityNews: ["0","1"]
    },
    gcqc: {
        name: "国产汽车",
        price: 13000,
        cityNews: ["0","1"]
    },
    fdmj: {
        name: "防毒面具",
        price: 1000,
        cityNews: ["0","1"]
    },
    hjss: {
        name : "黄金首饰",
        price: 2000,
        cityNews: ["0","1"]
    },
    jknf: {
        name: "进口奶粉",
        price: 500,
        cityNews: ["0","1"]
    },
    slrj: {
        name: "饲料肉鸡",
        price: 120,
        cityNews: ["0","1"]
    },
    spsj: {
        name: "肾牌手机",
        price: 5000,
        cityNews: ["0","1"]
    },
    zjyd: {
        name: "转基因豆",
        price: 50,
        cityNews: ["0","1"]
    }
}
const rentalHomeGoods = {

}
const randomEventsArr = [
    [
        "高档香烟涨了",
        "高档香烟跌了"
    ],
    [
        "国产汽车涨了",
        "国产汽车跌了"
    ],
    [
        "防毒面具涨了",
        "防毒面具跌了"
    ],
    [
        "黄金首饰涨了",
        "黄金首饰跌了"
    ],
    [
        "进口奶粉涨了",
        "进口奶粉跌了"
    ],
    [
        "饲料肉鸡涨了",
        "饲料肉鸡跌了"
    ],
    [
        "肾牌手机涨了",
        "肾牌手机跌了"
    ],
    [
        "转基因豆涨了",
        "转基因豆跌了"
    ],
]
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            loadDisplay: true,
            helpDisplay: false,
            btnHelpQuitDisplay: true,
            milestoneDisplay: false,
            btnOnClickState: false,
            startGameSelectionDisplay: false,
            myDiaryDisplay: false,
            endGameSelectionDisplay: false,
            marketGoodsDisplay: false,
            cityNewsDisplay: false,
            buyDisplay: false,
            isStartBtn : true,
            textPrompt: true,
            housePriceAndTimeDisplay: false,
            sellDisplay: false,
            randomEvent: false,

            housePrice: null,
            time: 1,
            cash: null,
            health: null,
            deposit: null,
            reputation: null,

            rentalHouse: "",
            rentalHouseCapacityUsed: 0,
            rentalHouseMaximumCapacity: 100,

            helpBg : 1,
            milestone: milestone,

            voucher: 290000,

            marketGoods: marketGoods,
            randomGoods: null,
            buyGoods: null,
            buyMaxNum: null,
            buyName: null,
            purchasePrice: null,
            rentalHomeGoods: rentalHomeGoods,
            sellGoods: null
        }
    }
    componentDidMount() {
        this.randomGoods()
        this.onStartGameSelectionStart()
        this.setState({
            myDiaryDisplay : false
        })
        setTimeout(() => {
            this.setState({
                loadDisplay : false
            })
        },0)
    }
    点击帮助
    onBtnHelp = () => {
        this.setState({
            helpDisplay: true,
            btnHelpQuitDisplay: true,
            helpBg: 1
        })
    }
    点击里程碑
    onBtnMilestone = () => {
        this.setState({
            milestoneDisplay: true,
        })
    }
    //点击市场
    onMarketBtn = () => {
        this.setState((state, props) => ({
            randomEvent: true
        }));
        this.randomGoods()
        this.setState({
            time: this.state.time + 1,
            housePrice: this.state.housePrice + 1
        })
    }
    onBtnBank = () => {
        alert(123)
    }
    onBtnHospital = () => {
        alert(123)
    }
    onBtnSalesDepartment = () => {
        alert(123)
    }
    onBtnIntermediary = () => {
        alert(123)
    }
    //点击开始游戏按钮
    onBtnStartGame = () => {
        if (this.state.isStartBtn) {
            this.setState({
                cash: 3000,
                startGameSelectionDisplay: true
            })
        } else {
            this.setState({
                endGameSelectionDisplay: true
            })
        }
    }
    //点击退出帮助
    onHelpQuit = () => {
        this.setState({
            helpDisplay: false
        })
    }
    //点击帮助下一页
    onHelpNext = () => {
        this.setState({
            helpBg: this.state.helpBg+1
        })
        if (this.state.helpBg == 8 ) {
            this.setState({
                btnHelpQuitDisplay : false
            })
        }

    }
    //点击显示里程碑
    onMilestoneQuit = () => {
        this.setState({
            milestoneDisplay : false
        })
    }
    //开始减少初始现金
    onCashDec = () => {
        this.state.cash > 3000 && this.setState({
            voucher : this.state.voucher + 1000,
            cash : this.state.cash - 1000
        })
    }
    //点击增加初始现金
    onCashAdd = () => {
        this.state.voucher > 0 && this.setState({
            voucher : this.state.voucher - 1000,
            cash : this.state.cash + 1000
        })
    }
    //点击开始游戏
    onStartGameSelectionStart = () => {
        this.randomGoods()
        this.setState({
            btnOnClickState: true,
            startGameSelectionDisplay: false,
            myDiaryDisplay : true,
            marketGoodsDisplay: true,
            isStartBtn : false,
            housePriceAndTimeDisplay: true,
            housePrice: 40,
            time: 1,
            cash: 3000,
            health: 100,
            deposit: 100,
            reputation: 100
        })
    }
    //点击取消游戏
    onStartGameSelectionCancel = () => {
        this.setState({
            cash: 3000,
            startGameSelectionDisplay: false
        })
    }
    //点击我的日记
    onMyDiary = () => {
        this.setState({
            myDiaryDisplay: false
        })
    }
    //点击结束按钮
    onEnd = () => {
        for(let key in rentalHomeGoods){
            delete rentalHomeGoods[key];
        }
        this.setState({
            btnOnClickState: false,
            isStartBtn : true,
            marketGoodsDisplay: false,
            endGameSelectionDisplay: false,
            rentalHouse: ""
        })
    }
    //点击取消按钮
    onCancel = () => {
        this.setState({
            endGameSelectionDisplay: false
        })
    }
    //点击商品
    onBuy = (e) => {
        this.setState({
            buyDisplay: true,
            buyGoods: e.target.getAttribute("class"),
            buyMaxNum: parseInt(this.state.cash / parseInt(e.target.nextElementSibling.textContent)),
            buyName: e.target.getAttribute("value"),
            purchasePrice: parseInt(e.target.nextElementSibling.textContent)
        })
    }
    //刷新商品
    randomGoods = () => {
        let randomPrice = (price) => {
            let randomPrice = 0
            while (randomPrice < price){
                randomPrice =  Math.floor(Math.random()*price*2 + 1)
            }
            return randomPrice
        }
        let randomGoodsArr = []
        while (randomGoodsArr.length < 5) {
            let randomGoods =  Math.floor(Math.random()*8)
            if (randomGoodsArr.indexOf(randomGoods) == -1){
                randomGoodsArr.push(randomGoods)
            }
        }
        let randomGoodsId = null
        let upOrDown = (Math.random() >= 0.5) ? true : false
        console.log(this.state.randomEvent)
        if (this.state.randomEvent) {
            randomGoodsId =  Math.floor(Math.random()*8)
            while (randomGoodsArr.indexOf(randomGoodsId) == -1) {
                randomGoodsId =  Math.floor(Math.random()*8)
            }
        }
        const randomGoods = randomGoodsArr.map((i) =>
            <div>
                <div onClick={this.onBuy.bind(this)} className={"market-marketGoods market-marketGoods-bg_m_" + Object.keys(this.state.marketGoods)[i]} value={this.state.marketGoods[Object.keys(this.state.marketGoods)[i]].name}></div>
                <div className={"market-marketGoods-price"}>{parseInt(((randomGoodsId == i) ? (upOrDown ? 1.4 : 0.6) : 1) * randomPrice(this.state.marketGoods[Object.keys(this.state.marketGoods)[i]].price))}</div>
                {(randomGoodsId == i) && <div className={"randomEvents"}>{randomEventsArr[randomGoodsId][upOrDown ? 0 : 1]}</div>}
            </div>
        );
        this.setState({
            randomGoods: randomGoods
        })
    }
    //刷新出租屋商品
    rentalHouse = () => {
        const rentalHouse = Object.keys(this.state.rentalHomeGoods).map((key) =>
            <div>
                <div onClick={this.onSellBtn} className={"market-marketGoods market-marketGoods-bg_w_" + key} value={key}></div>
                <div className={"market-marketGoods-purchase-price"}>{this.state.rentalHomeGoods[key].purchasePrice}</div>
                <div className={"market-marketGoods-count"}>{this.state.rentalHomeGoods[key].count}</div>
            </div>
        );
        this.setState({
            rentalHouse: rentalHouse
        })
    }
    //点击卖出按钮
    onSellBtn = (e) => {
        this.setState({
            sellDisplay: true,
            sellGoods: e.target.getAttribute("value")
        })
    }
    //点击退出卖出界面
    onSellQuit = () => {
        this.setState({
            sellDisplay: false
        })
    }
    //点击卖出物品按钮
    onSellGoodsBtn = (inputValue,sellingPrice) => {
        rentalHomeGoods[this.state.sellGoods].count -= inputValue
        this.setState({
            cash: this.state.cash + inputValue * sellingPrice,
            rentalHomeGoods: rentalHomeGoods,
            sellDisplay: false
        })
        if (rentalHomeGoods[this.state.sellGoods].count == 0) {
            delete rentalHomeGoods[this.state.sellGoods]
        }
        this.rentalHouse()
    }
    //点击购买按钮
    onBuyBtn = (rentalHomeGoodsBg,name,count,purchasePrice) => {
        if (count == 0){
            this.setState({
                textPrompt: false
            })
        } else {
            let rentalHomeGoodsKey = rentalHomeGoodsBg.slice(43,)
            if (rentalHomeGoods[rentalHomeGoodsKey]) {
                rentalHomeGoods[rentalHomeGoodsKey].purchasePrice = parseInt((count * purchasePrice + rentalHomeGoods[rentalHomeGoodsKey].count * rentalHomeGoods[rentalHomeGoodsKey].purchasePrice)/(rentalHomeGoods[rentalHomeGoodsKey].count + count))
                rentalHomeGoods[rentalHomeGoodsKey].count += count
            } else {
                rentalHomeGoods[rentalHomeGoodsKey] = {
                    name: name,
                    count: count,
                    purchasePrice: purchasePrice
                }
            }
            this.setState({
                rentalHomeGoods: rentalHomeGoods,
                cash: this.state.cash - count * purchasePrice,
                buyDisplay: false
            })
            this.rentalHouse()
        }
    }
    //点击退出买入
    onBuyQuit = ()=> {
        this.setState({
            buyDisplay: false
        })
    }
    render() {
        return (
            <div className="app">
                {this.state.loadDisplay && <Load />}
                {this.state.helpDisplay && <Help
                    helpBg={this.state.helpBg}
                    onHelpQuit={this.onHelpQuit.bind(this)}
                    onHelpNext={this.onHelpNext.bind(this)}
                    btnHelpQuitDisplay={this.state.btnHelpQuitDisplay}
                />}
                {this.state.milestoneDisplay && <Milestone
                    onMilestoneQuit={this.onMilestoneQuit.bind(this)}
                    milestone={this.state.milestone}
                />}
                {this.state.startGameSelectionDisplay && <StartGameSelection
                    onCashDec={this.onCashDec.bind(this)}
                    onCashAdd={this.onCashAdd.bind(this)}
                    onStartGameSelectionStart={this.onStartGameSelectionStart.bind(this)}
                    onStartGameSelectionCancel={this.onStartGameSelectionCancel.bind(this)}
                    voucher={this.state.voucher}
                    cash={this.state.cash}
                />}
                {this.state.myDiaryDisplay && <MyDiary
                    onMyDiary={this.onMyDiary.bind(this)}
                />}
                {this.state.endGameSelectionDisplay && <EndGameSelection
                    onEnd={this.onEnd.bind(this)}
                    onCancel={this.onCancel.bind(this)}
                />}
                {this.state.cityNewsDisplay && <CityNews
                />}
                {this.state.buyDisplay && <Buy
                    textPrompt={this.state.textPrompt}
                    purchasePrice={this.state.purchasePrice}
                    buyGoods={this.state.buyGoods}
                    buyMaxNum={this.state.buyMaxNum}
                    buyName={this.state.buyName}
                    onBuyBtn={this.onBuyBtn.bind(this)}
                    onBuyQuit={this.onBuyQuit.bind(this)}
                />}
                <HousePrice
                    housePriceAndTimeDisplay={this.state.housePriceAndTimeDisplay}
                    housePrice={this.state.housePrice}
                />
                <Time
                    housePriceAndTimeDisplay={this.state.housePriceAndTimeDisplay}
                    time={this.state.time}
                />
                <Market
                    randomGoods={this.state.randomGoods}
                    onBuy={this.onBuy}
                    marketGoodsDisplay={this.state.marketGoodsDisplay}
                />
                <RentalHouse
                    rentalHouse={this.state.rentalHouse}
                    rentalHouseCapacityUsed={this.state.rentalHouseCapacityUsed}
                    rentalHouseMaximumCapacity={this.state.rentalHouseMaximumCapacity}
                />
                <Cash cash={this.state.cash} />
                <Health health={this.state.health} />
                <Deposit deposit={this.state.deposit} />
                <Reputation reputation={this.state.reputation} />
                <BtnSecondHandMarket
                    btnOnClickState={this.state.btnOnClickState}
                    onMarketBtn={this.state.btnOnClickState && this.onMarketBtn.bind(this)}
                />
                <BtnAgriculturalMarket
                    btnOnClickState={this.state.btnOnClickState}
                    onMarketBtn={this.state.btnOnClickState && this.onMarketBtn.bind(this)}
                />
                <BtnWholesaleMarket
                    btnOnClickState={this.state.btnOnClickState}
                    onMarketBtn={this.state.btnOnClickState && this.onMarketBtn.bind(this)}
                />
                <BtnBank
                    btnOnClickState={this.state.btnOnClickState}
                    onBtnBank={this.state.btnOnClickState && this.onBtnBank.bind(this)}
                />
                <BtnHospital
                    btnOnClickState={this.state.btnOnClickState}
                    onBtnHospital={this.state.btnOnClickState && this.onBtnHospital.bind(this)}
                />
                <BtnSalesDepartment
                    btnOnClickState={this.state.btnOnClickState}
                    onBtnSalesDepartment={this.state.btnOnClickState && this.onBtnSalesDepartment.bind(this)}
                />
                <BtnIntermediary
                    btnOnClickState={this.state.btnOnClickState}
                    onBtnIntermediary={this.state.btnOnClickState && this.onBtnIntermediary.bind(this)}
                />
                <BtnHelp
                    onBtnHelp={this.onBtnHelp.bind(this)}
                />
                <BtnStartGame
                    btnOnClickState={this.state.btnOnClickState}
                    onBtnStartGame={this.onBtnStartGame.bind(this)}
                />
                <BtnMilestone
                    onBtnMilestone={this.onBtnMilestone.bind(this)}
                />
                {this.state.sellDisplay && <Sell
                    onSellGoodsBtn={this.onSellGoodsBtn.bind(this)}
                    onSellQuit={this.onSellQuit.bind(this)}
                    sellGoods={this.state.sellGoods}
                    rentalHomeGoods={this.state.rentalHomeGoods}
                />}
            </div>
        )
    }
}


//房价
class HousePrice extends React.Component {
    render() {
        return (
            <div className="house-price">
                房价：{this.props.housePriceAndTimeDisplay && (this.props.housePrice + "万元")}
            </div>
        )
    }
}
//时间
class Time extends React.Component {
    render() {
        return (
            <div className="time">
                时间：{this.props.housePriceAndTimeDisplay && (this.props.time + "/52周")}
            </div>
        )
    }
}
//现金
class Cash extends React.Component {
    render() {
        return (
            <div className="cash">
                现金：{this.props.cash}
            </div>
        )
    }
}
//健康
class Health extends React.Component {
    render() {
        return (
            <div className="health">
                健康：{this.props.health}
            </div>
        )
    }
}
//存款
class Deposit extends React.Component {
    render() {
        return (
            <div className="deposit">
                存款：{this.props.deposit}
            </div>
        )
    }
}
//名声
class Reputation extends React.Component {
    render() {
        return (
            <div className="reputation">
                名声：{this.props.reputation}
            </div>
        )
    }
}
//市场
class Market extends React.Component {
    render() {
        return (
            <div className="market">
                <p>市场</p>
                <p>货物&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价格</p>
                {this.props.marketGoodsDisplay && this.props.randomGoods}
            </div>
        )
    }
}
//出租屋
class RentalHouse extends React.Component {
    render() {
        return (
            <div className="rental-house">
                <p>出租屋({this.props.rentalHouseCapacityUsed}/{this.props.rentalHouseMaximumCapacity})</p>
                <p>货物&nbsp;&nbsp;&nbsp;&nbsp;买入价&nbsp;&nbsp;&nbsp;&nbsp;数量</p>
                <div>
                    <div>
                        {this.props.rentalHouse}
                    </div>
                </div>
            </div>
        )
    }
}


//二手市场按钮
class BtnSecondHandMarket extends React.Component {
    render() {
        return (
            <div className={"btn-second-hand-market " + (this.props.btnOnClickState ? "btn-second-hand-market-enable" : "btn-second-hand-market-disable")} onClick={this.props.onMarketBtn}>
            </div>
        )
    }
}
//农贸市场按钮
class BtnAgriculturalMarket extends React.Component {
    render() {
        return (
            <div className={"btn-agricultural-market " + (this.props.btnOnClickState ? "btn-agricultural-market-enable" : "btn-agricultural-market-disable")} onClick={this.props.onMarketBtn}>
            </div>
        )
    }
}
//批发市场按钮
class BtnWholesaleMarket extends React.Component {
    render() {
        return (
            <div className={"btn-wholesale-market " + (this.props.btnOnClickState ? "btn-wholesale-market-enable" : "btn-wholesale-market-disable")} onClick={this.props.onMarketBtn}>
            </div>
        )
    }
}
//银行按钮
class BtnBank extends React.Component {
    render() {
        return (
            <div className={"btn-bank " + (this.props.btnOnClickState ? "btn-bank-enable" : "btn-bank-disable")} onClick={this.props.onBtnBank}>
            </div>
        )
    }
}
//医院按钮
class BtnHospital extends React.Component {
    render() {
        return (
            <div className={"btn-hospital " + (this.props.btnOnClickState ? "btn-hospital-enable" : "btn-hospital-disable")} onClick={this.props.onBtnHospital}>
            </div>
        )
    }
}
//售楼部按钮
class BtnSalesDepartment extends React.Component {
    render() {
        return (
            <div className={"btn-sales-department-department " + (this.props.btnOnClickState ? "btn-sales-department-enable" : "btn-sales-department-disable")} onClick={this.props.onBtnSalesDepartment}>
            </div>
        )
    }
}
//中介按钮
class BtnIntermediary extends React.Component {
    render() {
        return (
            <div className={"btn-intermediary " + (this.props.btnOnClickState ? "btn-intermediary-enable" : "btn-intermediary-disable")} onClick={this.props.onBtnIntermediary}>
            </div>
        )
    }
}
//帮助按钮
class BtnHelp extends React.Component {
    render() {
        return (
            <div className={"btn-help"} onClick={this.props.onBtnHelp}>
            </div>
        )
    }
}
//开始游戏按钮
class BtnStartGame extends React.Component {
    render() {
        return (
            <div className={"btn-game " + (!this.props.btnOnClickState ? "btn-game-start":"btn-game-over")} onClick={this.props.onBtnStartGame}>
            </div>
        )
    }
}
//里程碑按钮
class BtnMilestone extends React.Component {
    render() {
        return (
            <div className={"btn-milestone"} onClick={this.props.onBtnMilestone}>
            </div>
        )
    }
}


//加载页
class Load extends React.Component {
    render() {
        return (
            <div className={"load"}>
            </div>
        )
    }
}
//帮助
class Help extends React.Component {
    render() {
        return (
            <div className={"help help-bg-" + this.props.helpBg}>
                <div className={"btn-help-quit"} onClick={this.props.onHelpQuit}></div>
                {this.props.btnHelpQuitDisplay && <div className={"btn-help-next"} onClick={this.props.onHelpNext}></div>}
            </div>
        )
    }
}
//买入选择
class Buy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: this.props.buyMaxNum
        }
    }
    onInput = (e) => {
        let inputValue = parseInt(e.target.value)
        if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= this.props.buyMaxNum) {
            this.setState({
                inputValue: inputValue
            })
        } else {
            this.setState({
                inputValue: ""
            })
        }
    }
    render() {
        return (
            <div className={"buy-bg"}>
                <div className={"buy"}>
                    <div>
                        <div className={this.props.buyGoods}></div>
                        <input type='text' onChange={this.onInput} value={this.state.inputValue} />
                        <div>个</div>
                        <div onClick={this.props.onBuyBtn.bind(this,this.props.buyGoods,this.props.buyName,this.state.inputValue,this.props.purchasePrice)} className={"buy-btn"}></div>
                    </div>
                    {this.props.textPrompt ? <p>你最多可以购买{this.props.buyMaxNum}个{this.props.buyName}</p> : <p>请输入大于0的数字</p>}
                    <div onClick={this.props.onBuyQuit} className={"buy-quit"}></div>
                </div>
            </div>
        )
    }
}
//里程碑
class Milestone extends React.Component {
    render() {
        let str = ""
        for(let i in this.props.milestone) {
            str += "<div class='milestone-firstPurchaseTime'>" + (this.props.milestone[i].firstPurchaseTime == "" ? "从未成功" : this.props.milestone[i].firstPurchaseTime) + "</div>"
        }
        for(let i in this.props.milestone) {
            str += "<div class='milestone-successes'>" + this.props.milestone[i].successes + "</div>"
        }
        return (
            <div className={"milestone"}>
                <p>我的买房记录</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;房型&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首次购买记录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;成功次数</p>
                <div className={"milestone-room-type"}>单身公寓</div>
                <div className={"milestone-room-type"}>二手旧房</div>
                <div className={"milestone-room-type"}>高档小区</div>
                <div className={"milestone-room-type"}>跃层大房</div>
                <div className={"milestone-room-type"}>四联排屋</div>
                <div className={"milestone-room-type"}>一线江景豪宅</div>
                <div className={"milestone-room-type"}>内环高端大宅</div>
                <div className={"milestone-room-type"}>单体泳池别墅</div>
                <div className={"milestone-room-type"}>热带小岛别墅</div>
                <div className={"milestone-room-type"}>火星移民基地</div>
                <div dangerouslySetInnerHTML={{__html: str}} />
                <div className={"milestone-quit"} onClick={this.props.onMilestoneQuit}></div>
            </div>
        )
    }
}
//开始游戏选择
class StartGameSelection extends React.Component {
    render() {
        return (
            <div className={"startGameSelection-bg"}>
                <div className={"startGameSelection"}>
                    <div className={"startGameSelection-voucher"}>
                        {this.props.voucher}
                        <div className={"startGameSelection-add"}></div>
                    </div>
                    <div className={"startGameSelection-cash"}>
                        <div onClick={this.props.onCashDec} className={"startGameSelection-dec"}></div>
                        {this.props.cash}
                        <div onClick={this.props.onCashAdd} className={"startGameSelection-add"}></div>
                    </div>
                    <div className={"startGameSelection-selectBtn"}>
                        <div onClick={this.props.onStartGameSelectionStart} className={"startGameSelection-start"}></div>
                        <div onClick={this.props.onStartGameSelectionCancel} className={"startGameSelection-cancel"}></div>
                    </div>
                </div>
            </div>
        )
    }
}
//我的日记
class MyDiary extends React.Component {
    render() {
        return (
            <div onClick={this.props.onMyDiary} className={"myDiary-bg"}>
                <div className={"myDiary"}>
                    <div>我来到这个城市已经四年了，合租、加班、月光的日子让我十分疲惫，买房子的梦想遥不可及，回老家还是继续坚持？我觉得用一年时间做最后一次努力!</div>
                </div>
            </div>
        )
    }
}
//结束选择
class EndGameSelection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={"endGameSelection-bg"}>
                <div className={"endGameSelection"}>
                    <div onClick={this.props.onEnd} className={"endGameSelection-End"}></div>
                    <div onClick={this.props.onCancel} className={"endGameSelection-Cancel"}></div>
                </div>
            </div>
        )
    }
}
//卖出窗口
class Sell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: this.props.rentalHomeGoods[this.props.sellGoods].count,
            sellingPrice: (Array.from(document.querySelectorAll(".market-marketGoods")).map(v=> v.getAttribute("value")).indexOf(this.props.rentalHomeGoods[this.props.sellGoods].name) >= 0) ? parseInt(document.querySelector("div[value=" + this.props.rentalHomeGoods[this.props.sellGoods].name + "]").nextElementSibling.textContent) : 0,
            goodsPresence: Array.from(document.querySelectorAll(".market-marketGoods")).map(v=> v.getAttribute("value")).indexOf(this.props.rentalHomeGoods[this.props.sellGoods].name) >= 0
        }
    }
    onInput = (e) => {
        let inputValue = parseInt(e.target.value)
        if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= this.props.rentalHomeGoods[this.props.sellGoods].count) {
            this.setState({
                inputValue: inputValue
            })
        } else {
            this.setState({
                inputValue: ""
            })
        }
    }
    info = () => {
        let profit = this.props.rentalHomeGoods[this.props.sellGoods].count * (this.props.rentalHomeGoods[this.props.sellGoods].purchasePrice - this.state.sellingPrice)
        if (this.state.goodsPresence) {
            return "卖出" + ((profit >= 0) ? ("可盈利" + profit) : ("会亏损" + -profit))
        } else {
            return "市场中没有这种货物，你无法出售"
        }
    }
    render() {
        return (
            <div className={"sell-bg"}>
                <div className={"sell"}>
                    <div className={"sell-input"}>
                        <div className={"market-marketGoods market-marketGoods-bg_w_" + this.props.sellGoods}></div>
                        <input type='text' onChange={this.onInput} value={this.state.inputValue} />
                        <div className={"sell-btn"} onClick={this.state.goodsPresence && this.props.onSellGoodsBtn.bind(this,this.state.inputValue,this.state.sellingPrice)} value={this.state.sellingPrice}></div>
                        <div onClick={this.props.onSellQuit} className={"sell-quit"}></div>
                    </div>
                    <p className={"sell-info"}>{this.info()}</p>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Main />,
    document.querySelector('body')
);