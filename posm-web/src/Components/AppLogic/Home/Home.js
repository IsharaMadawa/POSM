import Moment from 'react-moment';

function Billing() {
    var time = '1976-04-19T12:59:17-0500';


    return (
        <div>
            <p>Home</p>
            <p></p>
            <p></p>
            <br></br>
            <br></br>
            <hr></hr>
            <p />
            <br></br>
            <br></br>
            <hr></hr>
            <p>Moment demo:</p>
            <p>Time(initial): <Moment format="LLLL">{time}</Moment></p>
            <p>Timer(/second): <Moment data={time} interval={1000} style={{ fontWeight: 'bold' }} /></p>
            <p>Date(L format): <Moment data={time} format="L" /></p>
            <p>Increment(add 10 days + 12 hours): <Moment add={{ days: 10, hours: 12 }}>{time}</Moment></p>
            <p>Decrement(subtract 10 days + 12 hours): <Moment subtract={{ days: 10, hours: 12 }}>{time}</Moment></p>
            <p>From now: <Moment fromNow>{time}</Moment></p>
            <p>From now ago: <Moment fromNow ago>{time}</Moment></p>
            <p>From(1956-04-19): <Moment from="1956-04-19">{time}</Moment></p>
            <p>To now: <Moment toNow>{time}</Moment></p>
            <p>To(1996-05-31): <Moment to="1996-05-31">{time}</Moment></p>
        </div>
    );
}

export default Billing;
