import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {query: ""};
    }

    handleSearch = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleChange = (event) => {
        this.setState({
            change: event.target.value
        })
    }

    render() {
        let toDosListHTML;
        if(this.state.change==="2"){
            toDosListHTML = this.props.toDosList
                .filter((it)=> it[2].includes(this.state.query))
                .map((it, i) => {
                    return (
                        <div className="announcement">
                            <a key={i}>{it[0]}</a>
                            <br/>
                            <a key={i}>Tags: {it[2]}; Courses: {it[3]};</a>
                            <br/>
                            <p key={i}>{it[4]}</p>
                        </div>
                    )
                });
        }
        else if(this.state.change==="3"){
            toDosListHTML = this.props.toDosList
                .filter((it)=> it[3].includes(this.state.query))
                .map((it, i) => {
                    return (
                        <div className="announcement">
                            <a key={i}>{it[0]}</a>
                            <br/>
                            <a key={i}>Tags: {it[2]}; Courses: {it[3]};</a>
                            <br/>
                            <p key={i}>{it[4]}</p>
                        </div>
                    )
                });
        }
        else{
            toDosListHTML = this.props.toDosList
                .filter((it)=> it[4].includes(this.state.query))
                .map((it, i) => {
                    return (
                        <div className="announcement" >
                            <a key={i}>{it[0]}</a>
                            <br/>
                            <a key={i}>Tags: {it[2]}; Courses: {it[3]};</a>
                            <br/>
                            <p key={i}>{it[4]}</p>
                        </div>
                    )
                });
        }
        return (
            <div class="main">
                <input id="dscr1" type="text" value={this.state.query} onChange={this.handleSearch} placeholder="Search"/>
                <select id="sel" onChange={this.handleChange.bind(this)}>
                    <option value="1">description</option>
                    <option value="2">tags</option>
                    <option value="3">courses</option>
                </select>
                {toDosListHTML}
            </div>
        )
    }
}

export default Search;