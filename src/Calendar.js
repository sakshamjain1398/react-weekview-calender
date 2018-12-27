import React,{Component} from 'react'
import './Calendar.css'



class Calendar extends Component{
    constructor(props){
        super(props);
        this.state={
            weekStartDay :'',
            Today:'',
            selectedDaySub:''
        };
        this.handleNext=this.handleNext.bind(this);
        this.handlePrev=this.handlePrev.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    handleNext(){
        let date=new Date(this.state.weekStartDay);
        date=new Date(date.setDate(date.getDate()+7));
        this.setState({weekStartDay:date});
    }

    handlePrev(){
        let date=new Date(this.state.weekStartDay);
        date=new Date(date.setDate(date.getDate()-7));
        this.setState({weekStartDay:date});
    }

    handleClick(e){
         this.setState({selectedDaySub:this.state[e.currentTarget.attributes.name.value],selectedDate:e.currentTarget.attributes.data.value});
    }

    componentDidMount(){
        const days=['sun','mon','tue','wed','thurs','fri','sat'];
        let date=new Date();
        const that=this;
        this.setState({Today:date});
        let weekstartday=new Date();
        this.setState({weekStartDay:new Date(weekstartday.setDate(weekstartday.getDate()-weekstartday.getDay()-1))});
    };

    render() {
        const today = new Date(this.state.Today);
        let month = '';
        let year = '';
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let weekStart = new Date(this.state.weekStartDay);
        let selectedDate = this.state.selectedDate;
        if(!selectedDate)
            selectedDate=today.toDateString();
        weekStart = new Date(weekStart.setDate(weekStart.getDate() + 1));
        const day1 = <Dates active={weekStart.toDateString() === today.toDateString()}
                            selected={weekStart.toDateString() === selectedDate} name="sun"
                            dateString={weekStart.toDateString()} on={this.handleClick} date={weekStart.getDate()}/>;

        weekStart = new Date(weekStart.setDate(weekStart.getDate() + 1));
        if (weekStart) {
            month = weekStart.getMonth();
            year = weekStart.getYear();
        }
        const day2 = <Dates active={weekStart.toDateString() === today.toDateString()}
                            selected={weekStart.toDateString() === selectedDate} name="mon"
                            dateString={weekStart.toDateString()} on={this.handleClick} date={weekStart.getDate()}/>;

        weekStart = new Date(weekStart.setDate(weekStart.getDate() + 1));
        const day3 = <Dates active={weekStart.toDateString() === today.toDateString()}
                            selected={weekStart.toDateString() === selectedDate} name="tue"
                            dateString={weekStart.toDateString()} on={this.handleClick} date={weekStart.getDate()}/>;

        weekStart = new Date(weekStart.setDate(weekStart.getDate() + 1));
        const day4 = <Dates active={weekStart.toDateString() === today.toDateString()}
                            selected={weekStart.toDateString() === selectedDate} name="wed"
                            dateString={weekStart.toDateString()} on={this.handleClick} date={weekStart.getDate()}/>;

        weekStart = new Date(weekStart.setDate(weekStart.getDate() + 1));
        const day5 = <Dates active={weekStart.toDateString() === today.toDateString()}
                            selected={weekStart.toDateString() === selectedDate} name="thurs"
                            dateString={weekStart.toDateString()} on={this.handleClick} date={weekStart.getDate()}/>;

        weekStart = new Date(weekStart.setDate(weekStart.getDate() + 1));
        const day6 = <Dates active={weekStart.toDateString() === today.toDateString()}
                            selected={weekStart.toDateString() === selectedDate} name="fri"
                            dateString={weekStart.toDateString()} on={this.handleClick} date={weekStart.getDate()}/>;

        weekStart = new Date(weekStart.setDate(weekStart.getDate() + 1));
        const day7 = <Dates active={weekStart.toDateString() === today.toDateString()}
                            selected={weekStart.toDateString() === selectedDate} name="sat"
                            dateString={weekStart.toDateString()} on={this.handleClick} date={weekStart.getDate()}/>;

        return (

            <div>
                <div>
                    <div className="month">
                        <ul style={{"list-style":"none"}}>
                            <li>
                                <b>{months[month]}<br/>
                                <span style={{fontSize: 18}}>{String(year + 1900)}</span></b>
                            </li>
                        </ul>
                    </div>

                    <ul className="weekdays"><b>
                        <li></li>
                        <li>SUN</li>
                        <li>MON</li>
                        <li>TUE</li>
                        <li>WED</li>
                        <li>THU</li>
                        <li>FRI</li>
                        <li>SAT</li>
                        <li></li>
                    </b>
                    </ul>

                    <ul className="days">
                        <b>
                        <li onClick={this.handlePrev} style={{cursor: "pointer"}}>&#10094;</li>
                        {day1}
                        {day2}
                        {day3}
                        {day4}
                        {day5}
                        {day6}
                        {day7}
                        <li onClick={this.handleNext} style={{cursor: "pointer"}}>&#10095;</li>
                        </b>
                    </ul>
                </div>
            </div>
        )
    }
}
const Dates = (props) =>{
    return props.active?<li className="date" data={props.dateString} name={props.name} onClick={props.on}>
            <span className={props.date<10?"smallActive":"active"}>{String(props.date)}</span></li>
        :<li className="date" name={props.name} data={props.dateString} onClick={props.on}><span className={props.selected?props.date<10?"selectedSmallDate":"selectedDate":''}>{props.date}</span></li>;
};
export default Calendar;