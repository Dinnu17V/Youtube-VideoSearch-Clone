import React from 'react';


class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            term: ''
        }
        // constructor(props) {
        //     super(props);
        //     this.textInput = React.createRef();
    }



    // var textInput = React.createRef();

    // handleClick = () => {
    //     console.log("search", this.textInput.current.value);
    //     this.props.OnSearch(this.textInput.current.value);
    // }

    Updatestate = (event) => {
        this.setState({ term: event.target.value });
        this.props.OnSearch(this.state.term);
    }

    //onChange={this.Updatestate}
    render() {
        // const input = props => {

        //     var textInput = React.createRef();

        //     function handleClick() {
        //         console.log(textInput.current.value);
        //         this.props.OnSearch(this.textInput.current.value);
        //     }
        // }
        return (
            <div>
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search" onChange={this.Updatestate}></input>
                        {/* <div className="input-group-append">
                            <button className="btn btn-success" type="submit" onClick={this.handleClick}>Go</button>
                        </div> */}
                    </div>
                </form>
            </div >
        );
    }
}
export default SearchBar;